import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  score: number;
  isGameOver: boolean;
}

const initialState: GameState = {
  score: 0,
  isGameOver: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<number>) => {
      state.score += action.payload;
    },
    resetGame: (state) => {
      state.score = 0;
      state.isGameOver = false;
    },
    gameOver: (state) => {
      state.isGameOver = true;
    },
  },
});

export const { addScore, resetGame, gameOver } = gameSlice.actions;
export default gameSlice.reducer;
