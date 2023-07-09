"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const cors_1 = __importDefault(require("cors"));
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const users = [
    { id: '462dbe84-b7b2-40f3-849b-2843627b06e9', username: 'John Doe', login: 'john@example.com', password: '123', img: 'https://randomuser.me/api/portraits/men/18.jpg' },
    { id: '51839902-64f0-4110-a55d-21ca4f592d58', username: 'Jane Smith', login: 'jane@example.com', password: '123', img: 'https://randomuser.me/api/portraits/women/94.jpg' },
    { id: 'd29c805d-8903-42e9-a6e0-d5daa9f728f3', username: 'Alice Johnson', login: 'alice@example.com', password: '123', img: 'https://randomuser.me/api/portraits/men/48.jpg' },
];
const conversations = [
    { id: 'e8408761-aea6-4234-a531-4b83927df02a', usersId: ['462dbe84-b7b2-40f3-849b-2843627b06e9', '51839902-64f0-4110-a55d-21ca4f592d58'], lastActive: 1625136000 },
    { id: '1f60bf0c-88b1-43f4-8dda-714ec859201a', usersId: ['462dbe84-b7b2-40f3-849b-2843627b06e9', 'd29c805d-8903-42e9-a6e0-d5daa9f728f3'], lastActive: 1625142000 },
    { id: '4241b1c7-78f5-4c71-a76c-2d0f726972fd', usersId: ['51839902-64f0-4110-a55d-21ca4f592d58', 'd29c805d-8903-42e9-a6e0-d5daa9f728f3'], lastActive: 1625148000 },
];
const messages = [
    {
        id: 'e6f5f50d-291a-40a7-8c8c-028af849ee9c',
        title: 'Hello',
        ownerId: '462dbe84-b7b2-40f3-849b-2843627b06e9',
        conversationId: 'e8408761-aea6-4234-a531-4b83927df02a',
        date: 1625136000
    },
    {
        id: '1e83a8ce-0719-4be2-8645-99e6a84c0d9a',
        title: 'Hi there!',
        ownerId: '51839902-64f0-4110-a55d-21ca4f592d58',
        conversationId: 'e8408761-aea6-4234-a531-4b83927df02a',
        date: 1625137000
    },
    {
        id: '2628685a-9ab7-4e4e-8921-2925c8e5c598',
        title: 'How are you doing?',
        ownerId: '51839902-64f0-4110-a55d-21ca4f592d58',
        conversationId: 'e8408761-aea6-4234-a531-4b83927df02a',
        date: 1625137100
    },
    {
        id: 'f0f01fb6-1e83-4ad1-a3af-15032d9d30e6',
        title: 'Goodbye!',
        ownerId: '462dbe84-b7b2-40f3-849b-2843627b06e9',
        conversationId: 'e8408761-aea6-4234-a531-4b83927df02a',
        date: 1625144000
    },
    {
        id: 'c571e493-17a9-4f8c-96bc-26df8e116d80',
        title: 'Hey!',
        ownerId: 'd29c805d-8903-42e9-a6e0-d5daa9f728f3',
        conversationId: '1f60bf0c-88b1-43f4-8dda-714ec859201a',
        date: 1625142000
    },
    {
        id: '64376eef-3a6a-4f35-b6c4-c70f50ff41e4',
        title: 'Long time no see!',
        ownerId: 'd29c805d-8903-42e9-a6e0-d5daa9f728f3',
        conversationId: '1f60bf0c-88b1-43f4-8dda-714ec859201a',
        date: 1625142100
    },
    {
        id: '58a6d05f-2619-4f3b-9364-43f853c865b7',
        title: 'Take care!',
        ownerId: '462dbe84-b7b2-40f3-849b-2843627b06e9',
        conversationId: '1f60bf0c-88b1-43f4-8dda-714ec859201a',
        date: 1625144000
    },
    {
        id: 'd2a0eb18-82ef-4d59-9c50-b7e641166261',
        title: 'Hello everyone!',
        ownerId: '51839902-64f0-4110-a55d-21ca4f592d58',
        conversationId: '4241b1c7-78f5-4c71-a76c-2d0f726972fd',
        date: 1625148000
    },
    {
        id: '2152eb9b-3780-44ad-9f7c-1b1931b0bdfa',
        title: 'How\'s your day going?',
        ownerId: '51839902-64f0-4110-a55d-21ca4f592d58',
        conversationId: '4241b1c7-78f5-4c71-a76c-2d0f726972fd',
        date: 1625148100
    },
    {
        id: '6a52e3d3-1893-422e-97f6-d8281bbdc5b9',
        title: 'Have a great weekend!',
        ownerId: 'd29c805d-8903-42e9-a6e0-d5daa9f728f3',
        conversationId: '4241b1c7-78f5-4c71-a76c-2d0f726972fd',
        date: 1625154000
    },
];
app.get('/', (req, res) => {
    const IDs = [];
    for (let i = 0; i < 6; i++) {
        IDs.push((0, uuid_1.v4)());
    }
    const joinedIDs = IDs.join(', ');
    res.send(joinedIDs);
});
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find((user) => user.id === userId);
    if (user) {
        res.send(user);
    }
    else {
        res.status(404).send('User not found');
    }
});
app.get('/conversations', (req, res) => {
    const userId = req.query.userId;
    const filteredConversations = conversations.filter((conversation) => conversation.usersId.includes(userId));
    const result = filteredConversations.map((conversation) => {
        const secondUserId = conversation.usersId.find((id) => id !== userId);
        const user = users.find((user) => user.id === secondUserId);
        const lastMessage = messages
            .filter((message) => message.conversationId === conversation.id)
            .sort((a, b) => b.date - a.date)[0];
        return {
            conversationId: conversation.id,
            secondUserName: user === null || user === void 0 ? void 0 : user.username,
            secondUserImage: user === null || user === void 0 ? void 0 : user.img,
            lastMessage: lastMessage,
        };
    });
    res.json(result);
});
app.get('/messages/:id', (req, res) => {
    const conversationId = req.params.id;
    const filteredMessages = messages.filter(message => message.conversationId === conversationId);
    console.log(filteredMessages);
    res.send(filteredMessages);
});
app.post('/messages', (req, res) => {
    const { title, ownerId, conversationId, date } = req.body;
    messages.push({
        id: (0, uuid_1.v4)(),
        title: title,
        ownerId: ownerId,
        conversationId: conversationId,
        date: date,
    });
    res.send(200);
});
app.post('/login', (req, res) => {
    const { login, password } = req.body;
    const user = users.find((user) => user.login === login && user.password === password);
    if (user) {
        res.send({ success: true, message: 'Logged in successfully!', user: user });
    }
    else {
        res.status(401).send({ success: false, message: 'Invalid login or password' });
    }
});
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
