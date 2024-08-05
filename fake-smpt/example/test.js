import { createTransport } from "nodemailer";

const transport = createTransport({
    host: "127.0.0.1",
    port: "2525",
    secure: false,
});


async function main() {
    const info = await transport.sendMail({
        from: 'fake-smpt@fake.com',
        to: 'user@user.com',
        subject: 'Example mail',
        html: "<h1>Hello </h1>"
    })
    console.log("Message sent %s", info.messageId)
}

main().catch(console.error)
