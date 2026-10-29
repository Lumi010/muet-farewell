// Shared scoring rules: also copied into the server deployment.
function rushRound(seed, round) {
  let n = (seed + Math.imul(round + 1, 2654435761)) >>> 0;
  n ^= n >>> 16; n = Math.imul(n, 2246822507); n ^= n >>> 13;
  return (n >>> 0) % 16;
}
function rushEvaluate(seed, events) {
  let score=0, combo=0, hits=0, last=0;
  events.forEach((event, round) => {
    if (!Number.isInteger(event.cell) || event.cell<0 || event.cell>15 || !Number.isInteger(event.ms) || event.ms<last+80 || event.ms>30000) throw new Error('Invalid run timing');
    if (event.cell === rushRound(seed,round)) {
      combo++; hits++; score += 100 + Math.max(0, Math.floor((1100-(event.ms-last))/10)) + Math.min(combo,10)*10;
    } else { combo=0; score=Math.max(0,score-75); }
    last=event.ms;
  });
  return {score,combo,hits};
}
if (typeof module !== 'undefined') module.exports={rushRound,rushEvaluate};
