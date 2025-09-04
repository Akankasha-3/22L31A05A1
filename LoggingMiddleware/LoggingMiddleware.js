//logging middleware
export const LoggingMiddleware=(action,payload)=>{
    console.log(`[LOG - ${new Date().toISOString()}] Action: ${action}`, payload);
}
