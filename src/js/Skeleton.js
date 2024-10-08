function template() {
  return `
 <div class="box-in">
   <div class="box-in1"></div>
   <div class="box-in2"></div>
   <div class="box-in3"></div>
   <div class="box-in4"></div>
   <div class="box-in5"></div>
   <div class="box-in6"></div>
   <div class="box-in7"></div>
   <div class="box-in8"></div>
   <div class="box-in9"></div>
   <div class="box-in10"></div>
   <div class="box-in11"></div>
   <div class="box-in12"></div>

</div>
`;
}
export default function bindToDOM(parent) {
  const skeleton = template();
  parent.insertAdjacentHTML("beforeend", skeleton);
}
