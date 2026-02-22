// app/data/project1Sections.ts
export type Section = {
  id: string;
  title: string;
  content: string;
};

export const project1Sections: Section[] = [
  {
    id: "abstract",
    title: "Abstract",
    content:
      "CrisisEcho is a consumer-facing application that leverages Retrieval-Augmented Generation (RAG) and large language model (LLM) agents to detect, classify, and summarize hyperlocal emergencies from multi-source social media streams in near real-time. Traditional emergency response systems rely almost exclusively on official channels such as 911 dispatch, government sensors, and police scanners, which frequently lag actual events by minutes or hours. CrisisEcho addresses this gap by ingesting posts from Twitter/X, Reddit, Bluesky, Mastodon, Nextdoor, and Telegram alongside corroborating signals from official feeds including the National Weather Service, USGS Earthquake Hazards, FEMA OpenFEMA, PulsePoint, and GDELT. Processed posts are stored in MongoDB Atlas using native 2dsphere geospatial indexing, while a Pinecone-hosted vector index powers payload-filtered semantic retrieval. A three-step LLM agent chain performs event clustering, severity scoring, and natural-language alert generation. Results are delivered through a React web application featuring a Leaflet.js interactive map with color-coded crisis hotspots, a pin detail panel, a WebSocket real-time notification engine, and a natural-language query interface.",
  },
  {
    id: "introduction",
    title: "1. Introduction",
    content:
      "In fast-moving crises such as flash floods, active shooter situations, widespread power outages, and natural disasters, delays in official reporting can have life-threatening consequences. Yet ordinary people are frequently the first witnesses, posting real-time signals on social media before any official report is filed. Posts like \"Water rising fast on my street in Leesburg — cars already stuck\" or \"Heard multiple gunshots near Leesburg Outlet Mall, everyone running\" contain the earliest, most hyperlocal clues about emerging crises. Existing monitoring tools are predominantly keyword-based, failing to detect crisis signals expressed through indirect language, regional idioms, or evolving slang. CrisisEcho directly addresses this gap by replacing rigid keyword matching with semantic RAG-powered reasoning across a rich multi-source data pipeline, detecting hyperlocal emergencies minutes before official channels and delivering those alerts directly to everyday people via an interactive map.",
  },
  {
    id: "data",
    title: "2. Data Sources",
    content:
      "CrisisEcho employs a multi-layered data collection strategy spanning seven social media platforms, five official government and emergency APIs, five crowdsourced citizen platforms, and seven labeled research datasets. Social media sources include Twitter/X via Tweepy, Reddit via PRAW, Bluesky via the AT Protocol public firehose, Mastodon instance API streams, Nextdoor public post scraping, Telegram public channels via Telethon, and Facebook Groups via the Graph API. Official corroboration signals are ingested from the National Weather Service API, USGS Earthquake Hazards API, FEMA OpenFEMA, Waze Connected Citizens, and PulsePoint live 911 dispatch data. Crowdsourced platforms include Ushahidi, Citizen App, GDELT, Patch.com RSS feeds, and NewsAPI. Training and evaluation data draws from HumAID (77,000 annotated tweets), CrisisNLP, CrisisLex, Kaggle Disaster Tweets, CrisisMMD, the FireFlood Dataset, and ISCRAM corpora.",
  },
  {
    id: "architecture",
    title: "3. System Architecture",
    content:
      "CrisisEcho is structured as a five-layer pipeline. Layer 1 handles multi-source ingestion through Apache Kafka, with separate topics for social_raw, official_alerts, news_feed, and citizen_reports. Layer 2 is a Python preprocessing microservice applying spaCy NLP cleaning, Carmen and spaCy NER cascading geocoding, MinHash LSH deduplication, DistilBERT relevance pre-filtering, and Sentence-Transformers embedding generation using all-MiniLM-L6-v2 to produce 384-dimensional dense vectors. Layer 3 is a hybrid storage tier consisting of MongoDB Atlas for document and geospatial storage with 2dsphere indexes, Pinecone for persistent hosted vector search with payload-filtered ANN queries via HNSW, and Redis for a 30-minute sliding post cache, LLM result caching with 5-minute TTL, and Pub/Sub alert relay. Layer 4 is the RAG and LLM reasoning engine built with LangChain, executing a three-step agent chain using Claude Haiku as the primary backend with Ollama Llama3 as a free offline fallback. Layer 5 delivers alerts through a Go Fiber REST API with WebSocket support and a React 18 frontend with Leaflet.js maps, Recharts timelines, and real-time toast notifications.",
  },
  {
    id: "rag",
    title: "4. RAG Pipeline and LLM Agent",
    content:
      "The core intelligence of CrisisEcho resides in a hybrid retrieval and multi-step LLM reasoning chain. For each pipeline trigger, the retrieval module issues three concurrent queries: a Pinecone HNSW ANN search for the top 50 semantically similar posts within a configurable time window and geographic bounding box; a MongoDB $near geospatial query to capture posts with high geographic proximity but low semantic similarity; and a lookup of any active NWS, USGS, or PulsePoint official alerts in the same area, injected as high-authority context documents. The merged results are passed to the LangChain agent, which executes three sequential reasoning steps. Step 1 clusters posts into distinct real-world events with confidence scores. Step 2 scores cluster severity on a 1–5 scale considering language urgency, number of independent reporters, cross-platform corroboration, and official signal presence. Step 3 generates a two-to-three sentence plain-language public alert with source attribution and no personally identifiable information. Alerts are only published when severity reaches 3 or above, at least three independent contributors from at least two platforms are present, and geocoding confidence exceeds a minimum threshold.",
  },
  {
    id: "database",
    title: "5. Database Design",
    content:
      "MongoDB Atlas serves as the primary document and geospatial store, replacing PostgreSQL and PostGIS entirely through its native 2dsphere indexing. The posts collection stores each document with fields including post_id, source platform, raw and cleaned text, ISODate timestamp, a GeoJSON Point location field covered by a 2dsphere index, location confidence score, geocoding source, Pinecone embedding reference, cluster reference, crisis type, severity score, and a hashed username for privacy. The clusters collection stores centroid GeoJSON points, convex hull polygons representing the affected area, LLM-generated severity scores and rationale, natural-language summaries, contributing post arrays, platform source lists, official corroboration flags, and lifecycle status fields. Pinecone stores 384-dimensional float32 vectors with metadata payloads containing post_id, timestamp, latitude, longitude, source, crisis type, and severity score — all indexed for filtering to enable combined ANN plus metadata queries in a single call. Redis maintains a sorted set of recent posts, caches cluster summaries, and carries new alert events over Pub/Sub to the Go WebSocket server.",
  },
  {
    id: "evaluation",
    title: "6. Evaluation",
    content:
      "CrisisEcho is evaluated against a CrisisLex keyword-based baseline using the same post corpus, label set, and evaluation split. Primary metrics include Precision at K (target above 0.75), Recall (target above 0.70), end-to-end latency from first social post to map alert (target under 90 seconds), false positive rate (target below 0.20), geocoding accuracy to correct city or neighborhood (target above 0.80), and F1 improvement over the keyword baseline (expected to exceed 15 percentage points). Ground truth is constructed from two sources: HumAID and CrisisNLP test splits for offline evaluation, and PulsePoint dispatch records plus NWS active alerts for online evaluation of the live Northern Virginia pipeline. Over the course of the project, more than 10,000 labeled posts from HumAID and CrisisNLP are ingested as the baseline training corpus before live streaming begins.",
  },
  {
    id: "techstack",
    title: "7. Technology Stack",
    content:
      "The backend API is built in Go using the Fiber framework for high-throughput concurrent alert delivery and goroutine-based WebSocket management. The AI and ML pipeline runs in Python 3.11 using LangChain for multi-step agent orchestration and LlamaIndex for document context management. The frontend is React 18 with TypeScript and react-leaflet for the interactive geospatial map. The primary database is MongoDB Atlas free M0 tier with native 2dsphere geospatial indexing. The vector database is Pinecone Starter plan, selected for its persistent hosted ANN search with no inactivity-based expiry. Redis 7 handles hot caching and Pub/Sub. Apache Kafka running in Docker handles message queuing and simulated real-time streaming. spaCy, Sentence-Transformers, and datasketch provide NLP, embeddings, and MinHash deduplication respectively. Carmen and spaCy NER provide cascading geocoding. The LLM backend uses Claude claude-haiku-4-5 as the primary model with Ollama Llama3 as a free offline fallback. All services are containerized with Docker Compose and deployed on GCP Cloud Run.",
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content:
      "CrisisEcho demonstrates how large language models transform document databases from passive data stores into active reasoning systems capable of understanding the messy, ambiguous, and unstructured data that humans actually produce. By replacing rigid keyword matching with semantic RAG-powered reasoning across a rich multi-source data pipeline, the system can detect hyperlocal emergencies minutes before official channels and deliver those alerts directly to everyday people via a production-quality interactive map. Every component in the stack has a free-tier hosted option, making the full prototype deployable at zero infrastructure cost. The architecture is intentionally extensible — the same pipeline that detects crises can be repurposed for positive community event detection, multi-language support, or any other domain requiring real-time semantic reasoning over unstructured geographic text.",
  },
];