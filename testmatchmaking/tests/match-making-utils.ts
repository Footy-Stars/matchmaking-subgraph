import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  GameMatched,
  MatchCreated,
  WinningResult,
  WinningScore,
  Withdraw
} from "../generated/MatchMaking/MatchMaking"

export function createGameMatchedEvent(
  player1: Address,
  player2: Address,
  matchDetail1: ethereum.Tuple,
  matchDetail2: ethereum.Tuple
): GameMatched {
  let gameMatchedEvent = changetype<GameMatched>(newMockEvent())

  gameMatchedEvent.parameters = new Array()

  gameMatchedEvent.parameters.push(
    new ethereum.EventParam("player1", ethereum.Value.fromAddress(player1))
  )
  gameMatchedEvent.parameters.push(
    new ethereum.EventParam("player2", ethereum.Value.fromAddress(player2))
  )
  gameMatchedEvent.parameters.push(
    new ethereum.EventParam(
      "matchDetail1",
      ethereum.Value.fromTuple(matchDetail1)
    )
  )
  gameMatchedEvent.parameters.push(
    new ethereum.EventParam(
      "matchDetail2",
      ethereum.Value.fromTuple(matchDetail2)
    )
  )

  return gameMatchedEvent
}

export function createMatchCreatedEvent(
  matchId: BigInt,
  player: Address,
  matchDetail: ethereum.Tuple
): MatchCreated {
  let matchCreatedEvent = changetype<MatchCreated>(newMockEvent())

  matchCreatedEvent.parameters = new Array()

  matchCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "matchId",
      ethereum.Value.fromUnsignedBigInt(matchId)
    )
  )
  matchCreatedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  matchCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "matchDetail",
      ethereum.Value.fromTuple(matchDetail)
    )
  )

  return matchCreatedEvent
}

export function createWinningResultEvent(
  id: BigInt,
  matchDetail: ethereum.Tuple,
  wagerResult: ethereum.Tuple
): WinningResult {
  let winningResultEvent = changetype<WinningResult>(newMockEvent())

  winningResultEvent.parameters = new Array()

  winningResultEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  winningResultEvent.parameters.push(
    new ethereum.EventParam(
      "matchDetail",
      ethereum.Value.fromTuple(matchDetail)
    )
  )
  winningResultEvent.parameters.push(
    new ethereum.EventParam(
      "wagerResult",
      ethereum.Value.fromTuple(wagerResult)
    )
  )

  return winningResultEvent
}

export function createWinningScoreEvent(
  id: BigInt,
  winner: Address,
  score1: BigInt,
  score2: BigInt
): WinningScore {
  let winningScoreEvent = changetype<WinningScore>(newMockEvent())

  winningScoreEvent.parameters = new Array()

  winningScoreEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  winningScoreEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  winningScoreEvent.parameters.push(
    new ethereum.EventParam("score1", ethereum.Value.fromUnsignedBigInt(score1))
  )
  winningScoreEvent.parameters.push(
    new ethereum.EventParam("score2", ethereum.Value.fromUnsignedBigInt(score2))
  )

  return winningScoreEvent
}

export function createWithdrawEvent(to: Address, amount: BigInt): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
