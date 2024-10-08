import Board from "./Board";
import Controller from "./Controller";

const container = document.getElementById("container");
const board = new Board(container);

const controller = new Controller(board);
controller.init();

(async () => {
  try {
    if (navigator.serviceWorker) {
      await navigator.serviceWorker.register("./service-worker.js");
      console.log("worker register...");
    }
  } catch (err) {
    console.log(err, "Error");
  }
})();
