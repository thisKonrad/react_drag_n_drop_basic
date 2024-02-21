# React drag n drop

drag n drop without libary.

main function:
retrieve the actual player card that is being dragged using the dragPlayer.current index.

swaps the positions of the dragged player and the player that the dragged player is currently over.
this is done by assigning the value at the dragOverPlayer.current index to the dragPlayer.current index,
and vice versa.

update the state of the player cards using the setPlayer state.

using this function, you can easily implement drag-and-drop sorting for a list.

the useRef is used to keep track of the indices of the dragged player card
and the player that the dragged player is currently over.
