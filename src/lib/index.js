import { getUser } from '../api';

export const withPrivate = (callback) => {
  return async (ctx) => {
    try {
      const data = await getUser(ctx);
      if (data?.user) {
        ctx.req.session = {};
        ctx.req.session.user = data.user;
      }
    } catch (err) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        }
      };
    }

    return await callback(ctx);
  }
}

export const withAuth = (callback) => {
  return async (ctx) => {
    try {
      const data = await getUser(ctx);
      if (data?.user) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          }
        };
      }
    } catch (err) {

    }

    return await callback(ctx);
  }
}

export const withUser = (callback) => {
  return async (ctx) => {
    try {
      const data = await getUser(ctx);
      if (data?.user) {
        ctx.req.session = {};
        ctx.req.session.user = data.user;
      }
    } catch (err) {

    }

    return await callback(ctx);
  }
}