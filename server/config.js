const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/brandso',
  port: process.env.PORT || 4000,
  superSecret: 'SomethingNice',
  gorgias: {
    url: 'http://gorgiasapp-v4.azurewebsites.net/api/brandso/',
    azureBlob: {
      container: 'brandso',
      accessRight: { publicAccessLevel: 'blob' },
      connectionString: 'DefaultEndpointsProtocol=https;AccountName=gorgiasasia;AccountKey=+jQemo6t+KO9haIQyVSxwJMLt2wlhpyQDo2ucuJcjGFzU5PLUpkCgPrtycadOs9MxiZd3lnRh2D3QPm7vRBCag==;EndpointSuffix=core.windows.net'
    }
  },
  paginationSetting: {
    limit: 10
  },
};

export default config;
