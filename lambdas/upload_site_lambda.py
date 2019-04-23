# Import Modules
import boto3
import zipfile
import mimetypes
from io import BytesIO


def lambda_handler(event, context):

    # Connect to SNS
    sns = boto3.resource('sns')

    # Connect to SNS Topic
    topic = sns.Topic(
        'arn:aws:sns:us-east-1:178822644323:deploySpeedyCadoTopic')

    location = {
        "bucketName": 'build.thetroysmith.com',
        "objectKey": 'speedycadobuild.zip',
        "job": "N/A"
    }

    try:

        # Check if the job was invoked by CodePipeline
        job = event.get("CodePipeline.job")

        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "BuildArtifact":
                    location = artifact['location']['s3Location']

        print('Building SpeedyCado from ' + str(location))

        # Connect to S3
        s3 = boto3.resource('s3')

        # Connect to the website build S3 bucket and download the build
        site_zip = BytesIO()
        build_bucket = s3.Bucket(location['bucketName'])
        build_bucket.download_fileobj(location["objectKey"], site_zip)

        # Connect to the website's S3 bucket and upload the build
        site_bucket = s3.Bucket('thetroysmith.com')
        with zipfile.ZipFile(site_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                site_bucket.upload_fileobj(obj, nm,
                                           ExtraArgs={
                                               'ContentType': mimetypes.guess_type(nm)[0]
                                           })
                site_bucket.Object(nm).Acl().put(ACL="public-read")

        print('Job Done')

        # Email developer with SNS
        topic.publish(Subject="SpeedyCado Deployed",
                      Message="SpeedyCado deployed successfully!")

        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])

    except:
        topic.publish(Subject="SpeedyCado Deploy Failed",
                      Message="The SpeedyCado deploy was not successfull.")
        raise

    return "Hello from Lambda"
