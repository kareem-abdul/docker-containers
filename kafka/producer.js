const { Kafka } = require('kafkajs');

const clientId = "mock-up-kafka-producer-client";
const brokers = ["localhost:9092"];
const topic = "events";
const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

let index = 0
const produce = async () => {
    await producer.connect();
    while (true) {
        await producer.send({
            topic,
            messages: [
                { key: "key1", value: `${index++}`, partition: 0 },
                // { key: "key2", value: "hey hey!", partition: 0 },
            ],
        });
    }
};

produce()
    .then(() => {
        console.log("produced successfully");
    })
    .catch((err) => console.error("failed to produce message", err));
