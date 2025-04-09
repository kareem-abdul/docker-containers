const { Kafka } = require('kafkajs');
const clientId = "mock-up-kafka-producer-client";
const brokers = ["localhost:9092"];
const topic = "events";
const kafka = new Kafka({ clientId, brokers, partition: 0 });


/** @type {import("kafkajs").Consumer} */
const consumer1 = kafka.consumer({ 
    groupId: 'consumer',
});

const sleep = async (val) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, val);
    });
}

const run = async () => {
    await consumer1.connect();
    await consumer1.subscribe({ topic });

    return consumer1.run({
        eachMessage: async ({ topic, partition, message }) => {
            const prefix = `consumer ${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;

            console.log(`- ${prefix} ${message.key}#${message.value}`);
        },
    });
};

run().catch(e => console.error("consumer1 error ", e));

