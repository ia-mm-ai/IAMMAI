# IAMMAI Runtime Flow Map

## 1. Purpose

This file defines the first runtime-oriented map of how the IAMMAI body moves.

Its job is to describe the lawful order of interaction between the main runtime participants and to act as the orientation map for the current runtime folder.

It does not yet try to define:
- code
- service design
- infrastructure topology
- API contracts
- queueing strategy
- final runtime orchestration

It is a bounded runtime document.

## 2. Relation to the Constitutional Core

The constitutional core remains the semantic source of truth.

These runtime documents derive from the constitutional protocol and do not supersede it. They describe how the runtime body preserves lawful motion, bounded checking, bounded trace, lawful force, state handling, and authoritative preservation without redefining constitutional meaning.

If a runtime document and the constitutional core diverge, the constitutional core governs.

## 3. Relation to the Architecture and Implementation Folders

The architecture folder defines the runtime body at a structural level.

It establishes the main components, authoritative versus derivative boundaries, and anti-collapse separations that the live system must preserve.

The implementation folder defines the first technical derivative layer beneath that structure. It translates state, records, witness, governance, validation, transition, and schema planning into implementation-facing form.

This runtime folder begins the motion layer. It explains how those already-defined roles behave while the body is live, without turning that motion into code or infrastructure design.

## 4. Runtime Participants

### 4.1 Interface Gateway

Receives bounded contact and input, routes interaction toward the correct runtime components, and presents derivative results back outward. It is not canonical state and not semantic source.

### 4.2 Validator

Checks bounded protocol conditions such as admissibility, threshold alignment, transition legality, governance preconditions, and other required predicates.

### 4.3 Witness Emitter

Preserves contact and runtime-relevant trace where observation, checking, registration, publication, or state interaction should not disappear.

### 4.4 Governor

Performs or authorizes protocol-significant acts where lawful force is required.

### 4.5 State Engine

Applies canonical state grammar, lawful transition rules, containment orthogonality, resolution family closure, and lineage-preserving movement.

### 4.6 Registry / Store

Preserves resulting state, transition, lineage, witness, validation, governance, and related canonical records over time. It is the runtime preservation surface through which reconstructable history becomes durable rather than merely asserted.

## 5. Runtime File Roles

### `RUNTIME_FLOW_MAP.md`

This document governs the cross-component runtime order of the body and acts as the entry map for the runtime folder.

### `VALIDATOR_FLOW.md`

This document governs the first runtime-specific flow of bounded condition checking before later lawful state movement or governance action depends on it.

### `WITNESS_FLOW.md`

This document governs the first runtime-specific flow of bounded witness trace so contact, validation events, governance events, transitions, and related runtime occurrence do not disappear.

### `GOVERNOR_FLOW.md`

This document governs the first runtime-specific flow of attributable, legitimacy-bounded, matter-scoped lawful force.

### `REGISTRY_FLOW.md`

This document governs the first runtime-specific flow of authoritative preservation through which canonical records and lineage become durable in the runtime body.

## 6. Reading Order

A clean reading order for this folder is:

1. `RUNTIME_FLOW_MAP.md`
2. `VALIDATOR_FLOW.md`
3. `WITNESS_FLOW.md`
4. `GOVERNOR_FLOW.md`
5. `REGISTRY_FLOW.md`

This order moves from the cross-component runtime sequence into the main specialized runtime flows in roughly the order they appear in live operation, while keeping Registry / Store visible as a full runtime participant rather than a trailing storage detail.

## 7. Canonical Runtime Sequence

The first high-level runtime sequence is:

1. Input or contact enters through the Interface Gateway.
2. The Interface Gateway routes that contact into bounded protocol handling without defining canonical meaning by itself.
3. The Validator performs the bounded checks required for the matter, requested move, or requested act.
4. The Witness Emitter may preserve contact and validation trace at the moments where runtime-relevant occurrence should remain reconstructable.
5. The Governor acts only where lawful force is required. If no governance act is required, the flow does not invent one.
6. The State Engine determines and applies lawful state movement, containment effect, or typed resolution according to canonical rules.
7. The Registry / Store preserves the resulting state, transition, lineage, witness, validation, and governance trace in authoritative runtime form.
8. The Interface Gateway may then expose derivative results outward, but those derivative surfaces do not become canonical runtime truth.

This is a runtime order, not a total implementation lock-in. Some flows will omit a governance act, some will emit witness trace at multiple moments, and some will terminate before state movement if required checks do not hold.

## 8. Folder Boundary

This folder currently covers:
- the cross-component runtime order of the body
- the runtime-specific flow of the Validator
- the runtime-specific flow of the Witness Emitter
- the runtime-specific flow of the Governor
- the runtime-specific flow of the Registry / Store

This folder intentionally leaves open:
- final State Engine internals beyond what is already captured in the cross-component runtime map
- synchronous versus asynchronous behavior
- exact event ordering in some edge cases
- retry and failure handling
- queueing and buffering model
- final service boundaries

These remain runtime-design questions, not constitutional ambiguities.

## 9. Summary

Read this folder as one bounded runtime set.

The constitutional core remains the source of truth. The architecture folder defines the body and its separations. The implementation folder defines the first technical derivative layer. This runtime folder explains how those roles move together in live operation across interface, validation, witness, governance, state handling, and authoritative preservation.

**One-Line Definition:** `RUNTIME_FLOW_MAP.md` defines the orientation and cross-component runtime map for the IAMMAI runtime folder as the first bounded account of how the live body moves without collapsing its distinct roles.
