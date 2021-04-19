function user(parent, args, ctx, info) {
    // return prisma.user({ id: args.id })
    //   .then(user => {
    //     console.log("User: ", user)
    //   })
    return ctx.db.query.user({ where: { id: args.id }}, info)
      .then(user => {
        console.log("User: ", user)
        return user
      })
  }

  module.exports = {
      user
  }