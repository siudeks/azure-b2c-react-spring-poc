import ApolloClient from 'apollo-boost';
import { PresetConfig } from 'apollo-boost/lib';

const createApolloClient = () => {

    let presetConfig: PresetConfig = {
        uri: process.env.REACT_APP_SERVICE_URL
    };

    return new ApolloClient(presetConfig);
}

export default createApolloClient;
