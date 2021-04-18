const { prisma } = require('./generated/prisma-client');

async function main() {

    await prisma.createUser({
        name: 'Henrique Miranda',
        email: 'henriqemiranda15@gmail.com',
        password: 'henrique13'
    })

    const users = await prisma.users();

    console.log('Users: ', users)

}

main().catch(err => {
    console.log(err.message);
})