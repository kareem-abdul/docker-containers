import { Kafka } from "kafkajs";
const clientId = "mock-up-kafka-producer-client";
const brokers = ["localhost:9092"];
const topic = "events";
const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

const produce = async () => {
    await producer.connect();
    await producer.send({
        topic,
        messages: [
            { key: "key1", value: "hello world", partition: 0 },
            { key: "key2", value: "hey hey!", partition: 0 },
        ],
    })
}

produce()
    .then(() => {
        console.log("produced successfully");
    })
    .catch((err) => console.error("failed to produce message", err));
