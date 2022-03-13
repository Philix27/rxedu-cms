module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5165b5ce429cd9f8d2c2d4d92346902a'),
  },
});
