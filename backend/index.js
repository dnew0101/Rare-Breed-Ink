import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello, Hono!'));

app.listen({ port: 3000 });