import React from "react";
import Calendar from "./calendar";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <div className='App h-screen w-screen overflow-hidden'>
                <Calendar />
            </div>
        </QueryClientProvider>
    );
}

export default App;
