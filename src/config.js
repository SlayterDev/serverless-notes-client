export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'slayterdev-notes-uploads'
    },
    apiGateway: {
        REGION: 'us-east-1',
        URL: 'https://z9w7ks8kw2.execute-api.us-east-1.amazonaws.com/prod'
    },
    cognito: {
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_lP3v0JsRr',
        APP_CLIENT_ID: '3hl5nioeqhovre1lu752rvkae5',
        IDENTITY_POOL_ID: 'us-east-1:6406d2b2-5c54-41c9-a6fb-5fe22d35c1de'
    }
};
