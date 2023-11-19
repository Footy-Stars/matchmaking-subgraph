import {
  GameMatched as GameMatchedEvent,
  MatchCreated as MatchCreatedEvent,
  WinningResult as WinningResultEvent,
  WinningScore as WinningScoreEvent,
  Withdraw as WithdrawEvent
} from "../generated/MatchMaking/MatchMaking"
import {
  GameMatched,
  MatchCreated,
  WinningResult,
  WinningScore,
  Withdraw
} from "../generated/schema"

export function handleGameMatched(event: GameMatchedEvent): void {
  let entity = new GameMatched(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.player1 = event.params.player1
  entity.player2 = event.params.player2
  entity.matchDetail1_player1 = event.params.matchDetail1.player1
  entity.matchDetail1_player2 = event.params.matchDetail1.player2
  entity.matchDetail1_wager = event.params.matchDetail1.wager
  entity.matchDetail1_status = event.params.matchDetail1.status
  entity.matchDetail1_matchWith = event.params.matchDetail1.matchWith
  entity.matchDetail1_winner = event.params.matchDetail1.winner
  entity.matchDetail1_winningWager = event.params.matchDetail1.winningWager
  entity.matchDetail1_is_draw = event.params.matchDetail1.is_draw
  entity.matchDetail2_player1 = event.params.matchDetail2.player1
  entity.matchDetail2_player2 = event.params.matchDetail2.player2
  entity.matchDetail2_wager = event.params.matchDetail2.wager
  entity.matchDetail2_status = event.params.matchDetail2.status
  entity.matchDetail2_matchWith = event.params.matchDetail2.matchWith
  entity.matchDetail2_winner = event.params.matchDetail2.winner
  entity.matchDetail2_winningWager = event.params.matchDetail2.winningWager
  entity.matchDetail2_is_draw = event.params.matchDetail2.is_draw

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMatchCreated(event: MatchCreatedEvent): void {
  let entity = new MatchCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.matchId = event.params.matchId
  entity.player = event.params.player
  entity.matchDetail_player1 = event.params.matchDetail.player1
  entity.matchDetail_player2 = event.params.matchDetail.player2
  entity.matchDetail_wager = event.params.matchDetail.wager
  entity.matchDetail_status = event.params.matchDetail.status
  entity.matchDetail_matchWith = event.params.matchDetail.matchWith
  entity.matchDetail_winner = event.params.matchDetail.winner
  entity.matchDetail_winningWager = event.params.matchDetail.winningWager
  entity.matchDetail_is_draw = event.params.matchDetail.is_draw

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWinningResult(event: WinningResultEvent): void {
  let entity = new WinningResult(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.MatchMaking_id = event.params.id
  entity.matchDetail_player1 = event.params.matchDetail.player1
  entity.matchDetail_player2 = event.params.matchDetail.player2
  entity.matchDetail_wager = event.params.matchDetail.wager
  entity.matchDetail_status = event.params.matchDetail.status
  entity.matchDetail_matchWith = event.params.matchDetail.matchWith
  entity.matchDetail_winner = event.params.matchDetail.winner
  entity.matchDetail_winningWager = event.params.matchDetail.winningWager
  entity.matchDetail_is_draw = event.params.matchDetail.is_draw
  entity.wagerResult_player1 = event.params.wagerResult.player1
  entity.wagerResult_amount1 = event.params.wagerResult.amount1
  entity.wagerResult_player2 = event.params.wagerResult.player2
  entity.wagerResult_amount2 = event.params.wagerResult.amount2

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWinningScore(event: WinningScoreEvent): void {
  let entity = new WinningScore(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.MatchMaking_id = event.params.id
  entity.winner = event.params.winner
  entity.score1 = event.params.score1
  entity.score2 = event.params.score2

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
