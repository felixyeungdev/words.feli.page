class WordsAPI {
    static async getWord(word) {
        try {
            const result = await fetch(
                `https://api.feli.page/v1/words/define?word=${word}`
            );
            return await result.json();
        } catch (error) {
            console.log(`Error while fetching word definition: ${error}`);
            return null;
        }
    }
}

export default WordsAPI;
