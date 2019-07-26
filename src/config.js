const dev = {
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'notes-app-2-api-dev-attachmentsbucket-3ftoqzdf39xc'
    },
    apiGateway: {
        REGION: 'us-east-1',
        URL: 'https://z2snr4dgmd.execute-api.us-east-1.amazonaws.com/dev'
    },
    cognito: {
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_d4XUuY0oI',
        APP_CLIENT_ID: '53u7oqdfdv1uj685oq4ge7251n',
        IDENTITY_POOL_ID: 'us-east-1:7a25333c-45f9-4df6-90cc-e92eebb36537'
    }
};

const prod = {
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'notes-app-2-api-prod-attachmentsbucket-1uii70vvhejx2'
    },
    apiGateway: {
        REGION: 'us-east-1',
        URL: 'https://1vr4n4o9fb.execute-api.us-east-1.amazonaws.com/prod'
    },
    cognito: {
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_eBUdqxDXX',
        APP_CLIENT_ID: 'e4s0pp8agt72rblv70ckdvr7v',
        IDENTITY_POOL_ID: 'us-east-1:1d361eed-0c78-40bc-a59b-441d4aeaa5b1'
    }
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
