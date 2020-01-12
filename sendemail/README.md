Once your function is created, make sure you have cd'd into the function folder (in this case, **sendemail**/) and then run these commands:

1. **npm install**
2. **zip -r function.zip .**

Next, go online to your AWS console, and create an empty Lambda function (in the correction region- for me it's us-west-1 right now) and give it a specific, unique name (for example, the name for this function as a Lambda function is *sendemailtest1*).

Then, run the below command, replacing *mycoolfunction* with the name you came up with in the previous step:


3. ## aws lambda update-function-code --function-name mycoolfunction --zip-file fileb://function.zip

The above function is what actually loads the function into your AWS console as a Lambda function.

Now, if you want to schedule it, you just need to go to **CloudWatch** -> **Rules** -> **Create rule** -> select **'Schedule'** -> choose **'Fixed rate of'** or input a **Cron expression**, then **Add Target** -> select your Lambda function -> now click **Configure Details**, and give your rule a name, then click **Create rule**.




**resources:**

- https://docs.aws.amazon.com/lambda/latest/dg/nodejs-create-deployment-pkg.html
- https://www.youtube.com/watch?v=1nxIKzFBkRY&amp=&feature=emb_title&amp=&time_continue=23&app=desktop 