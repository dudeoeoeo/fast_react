import { rest } from 'msw';

const todos = [
    {
        id: `1`,
        title: `jimmy 1`,
    },
    {
        id: `2`,
        title: `jimmy 2`,
    },
    {
        id: `3`,
        title: `jimmy 3`,
    },
    {
        id: `4`,
        title: `jimmy 4`,
    },
    {
        id: `5`,
        title: `jimmy 5`,
    },
]

export const handlers = [
    rest.get("http://localhost:3000/api/projects", async(req, res, ctx) => {
        const pageIndex = req.url.searchParams.get('page');
        return res(
            ctx.json({
                projects: [
                    {
                        id: `1 ${pageIndex}`,
                        title: `jimmy 1-${pageIndex}`,
                    },
                    {
                        id: `2 ${pageIndex}`,
                        title: `jimmy 2-${pageIndex}`,
                    },
                    {
                        id: `3 ${pageIndex}`,
                        title: `jimmy 3-${pageIndex}`,
                    },
                    {
                        id: `4 ${pageIndex}`,
                        title: `jimmy 4-${pageIndex}`,
                    },
                    {
                        id: `5 ${pageIndex}`,
                        title: `jimmy 5-${pageIndex}`,
                    },
                ],
                hasMore: pageIndex < 4,
                nextCursor: parseInt(pageIndex) + 1,
            })
        );
    }),
    rest.post('http://localhost:3000/api/todo', async(req, res, ctx) => {
        const { todo } = req.body;
        console.log(JSON.stringify(todo));
        todos.push(todo)
        return res(ctx.json(true));
    }),
    rest.get('http://localhost:3000/api/todos', async(req, res, ctx) => {
        return res(ctx.json(todos));
    }),
    rest.get('/login', async(req, res, ctx) => {
        return res(
          ctx.json({
            id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
            firstName: 'John',
            lastName: 'Maverick',
          })
        )
    }),
    rest.get("https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json", async(req, res, ctx) => {
        const id = req.url.searchParams.get('id');

        
    const originalResponse = await ctx.fetch(req)
    const originalResponseData = await originalResponse.json()
        
        return res(
             // Send a valid HTTP status code
            ctx.status(403),
            // And a response body, if necessary
            ctx.json({
                errorMessage: `Data not found`,
            }),
            // ctx.json({
            //     "data": {
            //         "people" :
            //         [
            //             ...originalResponseData.data.people
            //             ,
            //             {
            //                 "name": id,
            //                 "age": 135
            //             },
            //         ]
            //     }
            // })
        )
    })
]