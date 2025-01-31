// deepseek-r1:1.5b

async function run(message) {
    const requestData = {
        model: "deepseek-r1:1.5b",
        messages: [
            {
                role: "user",
                content: message,
            },
        ],
        options: {
            seed: 101,
            temperature: 0,
        },
    };

    try {
        const res = await fetch("http://localhost:11434/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        if (!res.ok) {
            throw new Error("Network response was not ok");
        }

        const textData = await res.text();
        const jsonData = textData
            .split("\n")
            .filter((line) => line.trim())
            .map((line) => JSON.parse(line));

        return jsonData.map((item) => item.message.content).join(" ");
    } catch (error) {
        console.error('Error in chat service:', error);
        throw error;
    }
}

module.exports = { run };