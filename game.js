class Game {
    constructor() {
        this.state = {
            clues: [],
            suspects: [],
            evidence: [],
            currentTime: 0,
            gameActive: false,
            savedStates: []
        };
        this.timer = null;
    }

    initializeClues() {
        this.state.clues = [
            { id: 1, description: "A bloody knife found at the scene", verified: false },
            { id: 2, description: "Witness saw a hooded figure leaving the area", verified: false }
        ];
    }

    initializeSuspects() {
        this.state.suspects = [
            { id: 1, name: "John Doe", alibi: "Was at the bar", interrogated: false },
            { id: 2, name: "Jane Smith", alibi: "Home reading", interrogated: false }
        ];
    }

    startGame() {
        this.initializeClues();
        this.initializeSuspects();
        this.state.gameActive = true;
        this.startTimer();
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.state.currentTime += 1;
            console.log(`Time elapsed: ${this.state.currentTime}s`);
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
        this.timer = null;
    }

    interrogateSuspect(suspectId) {
        const suspect = this.state.suspects.find(s => s.id === suspectId);
        if (suspect) {
            suspect.interrogated = true;
            console.log(`Interrogated ${suspect.name}. Alibi: ${suspect.alibi}`);
        }
    }

    analyzeEvidence(evidenceId) {
        const evidence = this.state.evidence.find(e => e.id === evidenceId);
        if (evidence) {
            console.log(`Analyzing evidence: ${evidence.description}`);
        }
    }

    saveGame() {
        this.state.savedStates.push({ ...this.state });
        console.log("Game saved.");
    }

    loadGame(stateIndex) {
        if (this.state.savedStates[stateIndex]) {
            this.state = { ...this.state.savedStates[stateIndex] };
            console.log("Game loaded.");
        } else {
            console.log("No saved game found at this index.");
        }
    }

    endGame() {
        this.state.gameActive = false;
        this.stopTimer();
        console.log("Game ended.");
    }
}

// Example usage
const game = new Game();
game.startGame();
