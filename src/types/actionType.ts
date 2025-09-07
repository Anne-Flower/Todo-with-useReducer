export type Action =
    | { type: "add"; id: number; text: string }
    | { type: "delete"; id: number }
    | { type: "toggle"; id: number }
    | { type: "changeText"; id: number; text: string };