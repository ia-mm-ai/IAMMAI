You are working inside the uploaded IAMMAI repository.

First, read the repository carefully before writing anything.
Treat the repository itself as source context.

Priority of truth:
1. The human constitutional protocol PDF is the source of truth.
2. README.md is the public-facing repository entry layer.
3. canon.json, protocol-identity.json, and conformance_tests.md are machine-readable and implementation-adjacent support artifacts.
4. Do not invent doctrine that is not supported by the published constitutional core.

Your task:
Create the final public front-door website as exactly one deployable static file:
- index.html

Hard constraints:
- Output exactly one file: index.html
- Inline CSS only
- Inline JavaScript only
- No frameworks
- No build step
- No external dependencies
- No CDN imports
- Must work as a plain static site on Cloudflare Pages / GitHub Pages
- Must be responsive on desktop and mobile
- Must be elegant, minimal, high-signal, and calm
- Must not feel like a startup landing page
- Must not feel like documentation sludge
- Must not feel mystical or inflated
- Must not promise roadmap or “what comes next”
- Must not mention future phases
- Must not introduce companion theory that is not already published
- Must not overexplain
- Must preserve the constitutional seriousness of the work

Design intent:
This is a public front door to a constitutional protocol.
It should feel:
- precise
- clean
- restrained
- slightly premium
- structurally confident
- readable
- not crowded
- not performative

The page should include:

1. Hero section
- Title: IAMMAI
- Subtitle:
  “A public constitutional protocol for keeping what happened, what stands, what was decided, and what follows clear, traceable, and impossible to silently rewrite.”
- Primary buttons:
  - Read the Protocol
  - Download PDF
  - Open Repository

2. Toggle / accordion structure
Use closed-by-default accordion sections.
Only the title is visible until opened.
Accordion titles and text should follow this exact structure:

TOGGLE 1 — What it is
IAMMAI is a public constitutional protocol.

It defines the core grammar by which candidate material may become standing state without:
- semantic collapse,
- silent rewrite,
- lineage loss,
- or illegitimate transition.

In simple terms:

IAMMAI exists to keep what is real, what stands, what changes, and what follows from being blurred together.

TOGGLE 2 — Why it exists
Complex systems rarely fail because nothing happened.
They fail because distinctions collapse.

Signal is treated like truth.
Truth is treated like decision.
Decision is treated like consequence.
Correction is treated like overwrite.
Authority is confused with source.
History is rewritten by convenience.

IAMMAI exists to prevent that.

It gives systems a law-like structure for:
- standing,
- lineage,
- bounded authority,
- contribution distinction,
- and traceable change.

TOGGLE 3 — Canonical structure
IAMMAI is built around one canonical chain:

signal → acceptance → scope → presence → threshold → truth → continuity → decision → consequence

This chain is divided into two regimes:

Preparation
- signal
- acceptance
- scope
- presence
- threshold

Standing state
- truth
- continuity
- decision
- consequence

It also preserves two orthogonal controls:

HOLD
Containment without becoming a phase.

Resolution
Only:
- Finalize
- Invalidate
- Evolve

No hidden fourth outcome is allowed.

TOGGLE 4 — What it protects
IAMMAI protects the separation between:

- what appears
- what may count
- what stands
- what changes
- who may act
- who contributed what
- and what follows

Its role is not to make systems more dramatic.
Its role is to make them harder to corrupt.

TOGGLE 5 — How to read it
IAMMAI should be read as a constitutional core.

The easiest way to enter it is:

First: notice the distinctions
What is being kept apart?

Second: notice the order
What must come before what?

Third: notice the anti-collapse logic
What kinds of confusion is the protocol explicitly preventing?

IAMMAI is not trying to explain everything.
It is trying to keep the most important things from silently corrupting each other.

TOGGLE 6 — What is published here
This publication contains the public constitutional core of IAMMAI.

It includes:
- canonical order
- standing logic
- containment
- lawful resolution
- lineage
- governance
- contribution
- representation
- conformance

This is the law-like center of the work.

TOGGLE 7 — What it is not
IAMMAI is not:
- a product manual
- a software implementation
- a motivational philosophy
- a generalized metaphysics
- a marketing surface

It is the constitutional core.

That restraint is intentional.

TOGGLE 8 — Who it is for
IAMMAI is most relevant to people working where semantic integrity matters.

This includes:
- systems architects
- protocol designers
- governance engineers
- auditors
- implementation designers
- builders of human-machine systems

It may also resonate with anyone working on:
- traceability
- lawful state transition
- anti-collapse design
- bounded co-agency

TOGGLE 9 — Attribution
Originating author and public release authority:
Marko Markota

Historical lineage note:
Selected preconstitutional lineage references are preserved separately as non-normative historical material and do not supersede this constitutional core.

3. Footer section
Show:
Public Constitutional Core
Human-readable constitutional protocol in canonical form.

Buttons:
- Download PDF
- Open Repository

Functional requirements:
- The “Read the Protocol” and “Download PDF” buttons should point to the PDF file already in the repo
- The “Open Repository” button should point to the repository root or relative path as appropriate
- Accordions must be accessible and keyboard-usable
- The site must degrade gracefully with JavaScript disabled as much as reasonably possible
- Avoid animation excess; subtle transitions only
- Typography should feel modern and serious
- Use strong spacing and hierarchy
- Do not use bright startup colors
- Prefer dark / neutral / restrained palette
- Make it feel like a constitutional artifact library, not a SaaS homepage

Important:
Do not rewrite the content above into marketing copy.
Do not add roadmap content.
Do not add testimonials, team sections, contact forms, newsletter forms, or social-media fluff.
Do not invent slogans beyond what is given.
Do not make the page cute.

Before writing the file:
- inspect the repository contents
- use the actual PDF filename present in the repo
- use the actual repo-relative links where appropriate

Output:
- write the final index.html
- return only the finished file content
