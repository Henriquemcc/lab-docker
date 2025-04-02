const PORT = 8080;

Deno.serve({port: PORT}, async (requisicao: Request): Promise<Response> => {
    const url = new URL(requisicao.url);

    // Rota '/'
    if (url.pathname === '/') {
        const html = await Deno.readTextFile("public/index.html");
        return new Response(html, { headers: { "Content-Type": "text/html" } });
    }

    // Rota '/cafe'
    if (url.pathname === '/cafe') {
        const html = await Deno.readTextFile("public/cafe.html");
        return new Response(html, {headers: { "Content-Type": "text/html" }, status: 418 });
    }

    // Rota '/sobre'
    if (url.pathname === '/sobre') {
        const html = await Deno.readTextFile("public/sobre.html");
        return new Response(html, { headers: { "Content-Type": "text/html" } });
    }

    return new Response("Erro 404, não encontrado!", {status: 404});
})