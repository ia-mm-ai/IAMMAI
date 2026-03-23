# IAMMAI

IAMMAI is a public constitutional protocol for keeping what happened, what stands, what was decided, and what follows clear, traceable, and impossible to silently rewrite.

This repository publishes the constitutional core of IAMMAI together with the first architecture, implementation, and schema artifacts required for its lawful body.

## Repository structure

### `protocol/`
The constitutional center.

Contains:
- `IAMMAI_Public_Constitutional_Protocol_v1.0.pdf` — the canonical human-readable constitutional protocol
- `canon.json` — the machine-readable constitutional twin
- `protocol_identity.json` — compact machine-readable protocol identity
- `conformance_tests.md` — minimal conformance checks for IAMMAI core compatibility

### `architecture/`
The body architecture.

Contains:
- `REFERENCE_ARCHITECTURE_v0.md`
- `RUNTIME_COMPONENTS.md`
- `WITNESS_VALIDATOR_GOVERNOR.md`
- `AUTHORITATIVE_VS_DERIVATIVE_SURFACES.md`
- `STATE_AND_DATA_ROLES.md`
- `ARCHITECTURE_MAP.md`

These documents define the first implementation-facing architecture for carrying the constitutional core as more than text.

### `implementation/`
The first technical derivative layer.

Contains:
- `STATE_MACHINE_OVERVIEW.md`
- `CANONICAL_RECORDS_OVERVIEW.md`
- `WITNESS_ARTIFACT_OVERVIEW.md`
- `GOVERNANCE_ACTION_OVERVIEW.md`
- `VALIDATION_ARTIFACT_OVERVIEW.md`
- `TRANSITION_RECORD_OVERVIEW.md`
- `IMPLEMENTATION_MAP.md`
- `SCHEMA_MAP.md`

These documents define the first implementation-oriented overviews derived from the constitutional core and the architecture layer.

### `schemas/`
The first mechanically constrained artifact family.

Contains:
- `witness_artifact.schema.json`
- `validation_artifact.schema.json`
- `governance_action.schema.json`
- `transition_record.schema.json`
- `state_record.schema.json`

These files are the first schema family derived from the implementation layer. They do not replace the constitutional core; they make parts of the body more machine-checkable.

## Reading order

A clean reading order is:

1. `protocol/IAMMAI_Public_Constitutional_Protocol_v1.0.pdf`
2. `protocol/canon.json`
3. `protocol/conformance_tests.md`
4. `architecture/ARCHITECTURE_MAP.md`
5. `architecture/REFERENCE_ARCHITECTURE_v0.md`
6. the remaining files in `architecture/`
7. `implementation/IMPLEMENTATION_MAP.md`
8. the remaining files in `implementation/`
9. the files in `schemas/`

## Constitutional priority

The constitutional protocol remains the source of truth.

Machine-readable artifacts, architecture documents, implementation documents, and schemas exist in support of that core and do not supersede it.

If any file, surface, or implementation convenience conflicts with the constitutional protocol, the constitutional protocol governs.

## What IAMMAI does

IAMMAI defines the core protocol grammar for:

- separating candidate material from standing state
- preserving lineage across lawful change
- preventing silent overwrite and semantic collapse
- bounding authority, contribution, and consequence
- keeping protocol-significant transitions traceable and recoverable

## Current position

This repository now contains:

- the published constitutional core
- the machine-readable constitutional twin
- the first body architecture
- the first implementation derivative set
- the first schema family

That is enough to begin embodiment without treating implementation as a substitute for the law.

## Attribution

**Originating author and public release authority:**  
Marko Markota

**Historical lineage note:**  
Selected preconstitutional lineage references are preserved separately as non-normative historical material and do not supersede the constitutional core.

## License

This repository is published under **CC0-1.0**.
