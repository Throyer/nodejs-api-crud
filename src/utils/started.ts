export const started = (port: number) => 
    console.log(`🚀️ started on http://localhost:${port} | environment: ${process.env.NODE_ENV}`);