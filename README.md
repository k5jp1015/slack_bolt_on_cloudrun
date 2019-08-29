

$ docker build -t slack-app:0.1 .

$ docker run -d -p 80:3000 slack-app:0.1


$ gcloud builds submit --tag gcr.io/devteam-1341/slack-app

$ gcloud beta run deploy --image gcr.io/devteam-1341/slack-app --platform managed