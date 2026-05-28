# ImpliedAI

AI-powered M&A premium intelligence and transaction research.

This is a modern Next.js + Tailwind CSS prototype for ImpliedAI, built with simulated transaction outputs first. The goal is to make the platform feel real before adding SEC scraping, deal databases, Python pipelines, or production machine learning.

## Pages

- Landing page
- Platform overview
- Overpay Index dashboard
- Historical deals explorer
- Methodology
- Contact

## Local Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Current Model State

The current product uses mock transaction data for examples like:

- Microsoft / Activision Blizzard
- Broadcom / VMware
- Elon Musk / Twitter
- Adobe / Figma

The fake outputs are intentional. They let the website, product framing, and dashboard workflow exist before the data and model infrastructure are built.

## Next Build Steps

1. Add real precedent transaction data.
2. Build a structured deal schema.
3. Create a Python premium-prediction notebook.
4. Convert the mock Overpay Index into a real scoring model.
5. Connect the website to an API-backed dataset.
