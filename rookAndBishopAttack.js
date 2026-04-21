function rookBishopAttack(rook, bishop) {
  const rookCol = rook.charCodeAt(0);
  const rookRow = Number(rook[1]);
  const bishopCol = bishop.charCodeAt(0);
  const bishopRow = Number(bishop[1]);

  if (rookCol === bishopCol || rookRow === bishopRow) {
    return "rook";
  }

  if (Math.abs(rookCol - bishopCol) === Math.abs(rookRow - bishopRow)) {
    return "bishop";
  }

  return "neither";
}
