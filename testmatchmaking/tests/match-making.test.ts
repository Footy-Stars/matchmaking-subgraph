import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { GameMatched } from "../generated/schema"
import { GameMatched as GameMatchedEvent } from "../generated/MatchMaking/MatchMaking"
import { handleGameMatched } from "../src/match-making"
import { createGameMatchedEvent } from "./match-making-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let player1 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let player2 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let matchDetail1 = "ethereum.Tuple Not implemented"
    let matchDetail2 = "ethereum.Tuple Not implemented"
    let newGameMatchedEvent = createGameMatchedEvent(
      player1,
      player2,
      matchDetail1,
      matchDetail2
    )
    handleGameMatched(newGameMatchedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("GameMatched created and stored", () => {
    assert.entityCount("GameMatched", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "GameMatched",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "player1",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "GameMatched",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "player2",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "GameMatched",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "matchDetail1",
      "ethereum.Tuple Not implemented"
    )
    assert.fieldEquals(
      "GameMatched",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "matchDetail2",
      "ethereum.Tuple Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
