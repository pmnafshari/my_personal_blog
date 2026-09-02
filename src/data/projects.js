/**
 * Project catalogue.
 *
 * Add a project by appending an object here — the UI renders from this array.
 *
 *   featured   one project only; renders as the large horizontal card
 *   onHome     include in the "Selected Projects" grid on the landing page
 *   image      path under public/ ; 16:9 preferred
 *   figure     true when `image` is a research figure (matplotlib output).
 *              Renders mounted on a light plate instead of edge-to-edge.
 *   github     omit or leave '' when no public repository exists
 *   demo       omit or leave '' when there is no publicly reachable demo
 */
export const projects = [
  {
    id: 'meningioma',
    title: 'Meningioma Grade Classification from AFM',
    category: 'Medical AI',
    period: 'Sep 2025 — present',
    tagline: "Master's thesis",
    description:
      'Grading meningioma tumours from atomic force microscopy force curves and histology whole-slide images. Temporal CNNs and transformers read the nanomechanical curves; attention-based multiple instance learning aggregates WSI patches.',
    longDescription:
      'Meningioma grading drives treatment decisions but relies on subjective histological assessment. This work asks whether the mechanical signature of tissue — measured by AFM as force–indentation curves — carries enough signal to separate Grade 1 from Grade 2.',
    problem:
      'Grade assignment is observer-dependent, and the available cohort is small: tens of samples, not thousands. Any honest evaluation has to survive leave-one-sample-out validation rather than a convenient random split.',
    approach:
      'Two model families over the curve data — a TemporalCNN and a transformer encoder with a CLS token — plus attention-based MIL over histology patches. Everything is evaluated leave-one-sample-out, so no sample contributes to both training and test. Gradient saliency and CLS attention weights are extracted to show which region of the force curve each model actually relies on.',
    results:
      'On grade prediction the TemporalCNN reaches 74.5% LOSO accuracy across 23 samples, against 65.6% for the transformer. Both interpretability methods converge on the same region: the low-force contact portion at the start of the indentation curve.',
    technologies: ['Python', 'PyTorch', 'NumPy', 'TemporalCNN', 'Transformers', 'ABMIL'],
    image: '/thesis/plots/cross_model_attention_heatmap_2026-03-22.png',
    imageAlt:
      'Cross-model attention heatmap comparing TemporalCNN gradient saliency against transformer CLS attention weights over an AFM force curve',
    figure: true,
    demo: '/thesis/index.html',
    demoLabel: 'View full results',
    github: '',
    featured: true,
    onHome: true,
  },

  {
    id: 'powerbi-dashboard',
    title: 'Cross-Project ML Performance Dashboard',
    category: 'Data Engineering',
    period: 'Aug 2026 — present',
    description:
      'A star-schema semantic model benchmarking hybrid, CNN, ViT and classical models across four biomedical studies — built to make evaluation integrity, not just accuracy, a first-class dimension.',
    longDescription:
      'A leaderboard that ranks models on accuracy alone will happily promote a model that leaked its test set. This dashboard models validation design as a dimension of its own so that failure is visible.',
    problem:
      'Benchmark numbers scattered across four studies were not comparable: different splits, different metrics, some reported and some not.',
    approach:
      'Seven-table star schema over 28 benchmark results, ingested with a Python pipeline (pandas, openpyxl) on a OneDrive-linked refresh. DAX measures score each result against its validation design. Every metric is traced to a named source; unreported metrics are left blank rather than imputed.',
    results:
      'The three highest-accuracy models in the portfolio all turned out to have compromised evaluation designs — a leaderboard ranked on accuracy alone would have promoted every one of them.',
    technologies: ['Power BI', 'DAX', 'Python', 'pandas', 'Dimensional Modeling'],
    image: '/images/projects/powerbi-dashboard.svg',
    imageAlt:
      'Abstract dashboard layout showing KPI tiles, a model comparison bar chart, and a validation-integrity indicator',
    github: '',
    // The Power BI report link on the CV is tenant-scoped (app.powerbi.com/groups/me/...)
    // and resolves only for the report owner. Publish the report to web and paste the
    // public URL here to switch the "Live Demo" button on.
    demo: '',
    onHome: true,
  },

  {
    id: 'voice-agent-sofia',
    title: 'Sofia — Airline Voice Agent',
    category: 'AI Systems',
    period: 'Mar 2026',
    description:
      'A telephone voice assistant for a fictional Italian airline, built for an AI Voice Agent hackathon. Handles the full passenger service conversation: lookups, changes, cancellations, and escalation.',
    longDescription:
      'Voice agents fail at the seams — when a caller switches language, when the model has to actually call an API, and when the request exceeds what the agent is allowed to do.',
    problem:
      'Passenger service calls need live data, not plausible-sounding data, and an agent that cannot recognise the limits of its own authority is worse than no agent.',
    approach:
      'Speech understanding with live airline API calls behind it, automatic language detection, and tone adaptation to the caller. Requests beyond the agent’s authority hand off to a named human supervisor rather than being improvised.',
    results:
      'End-to-end conversational flow over the phone, covering flight lookup through booking cancellation, with a defined escalation path.',
    technologies: ['ElevenLabs', 'LLM Tool Calling', 'REST APIs', 'Speech Recognition'],
    image: '/images/projects/voice-agent.svg',
    imageAlt:
      'Abstract voice agent diagram showing an audio waveform feeding into intent, tool-call, and escalation stages',
    github: '',
    demo:
      'https://www.linkedin.com/posts/peyman-afshari-936149378_aiabrvoiceabragent-hackathon-elevenlabs-ugcPost-7437520539189051393-KMRq',
    demoLabel: 'Watch demo',
    onHome: true,
  },

  {
    id: 'n8n-research-rag',
    title: 'Research Paper Analysis System',
    category: 'AI Systems',
    period: 'Sep — Dec 2025',
    description:
      'An automated literature workflow that searches Google Scholar, arXiv, Semantic Scholar and IEEE, summarises what it finds, and stores it in a searchable database with citation alerts.',
    longDescription:
      'Tracking several research threads at once means repeatedly running the same searches and re-reading the same abstracts.',
    problem:
      'Manual literature review does not scale across parallel topics, and new citations are easy to miss entirely.',
    approach:
      'An n8n workflow polls the academic sources, passes new papers to LLMs for summarisation and insight extraction, and writes both paper and summary into a retrievable store. Alerts fire when a tracked paper is published or cited. The whole stack runs under Docker.',
    results:
      'Cut the time needed for a literature pass substantially and made it practical to follow several research topics in parallel.',
    technologies: ['n8n', 'RAG', 'Docker', 'Vector Search', 'LLM APIs'],
    image: '/images/projects/research-rag.svg',
    imageAlt:
      'Workflow graph showing academic sources feeding through retrieval and summarisation nodes into a searchable store',
    github: '',
    demo: '',
    onHome: true,
  },

  {
    id: 'yolo-detection',
    title: 'Custom Object Detection with YOLO',
    category: 'Computer Vision',
    period: 'Jun — Jul 2025',
    description:
      'An end-to-end detection pipeline for washing machine components — dataset creation and annotation through training, evaluation, and hyperparameter tuning.',
    longDescription:
      'A detector is only as good as the dataset behind it, so this project started from an empty folder rather than a public benchmark.',
    problem:
      'No annotated dataset existed for the target components, and off-the-shelf weights had never seen them.',
    approach:
      'Built and annotated a custom dataset in Label Studio, then trained and fine-tuned a YOLO detector on it. Evaluated with precision–recall rather than accuracy, since the class balance makes accuracy misleading.',
    results:
      'A working detector for the target components, improved through hyperparameter tuning against precision–recall.',
    technologies: ['Python', 'YOLO', 'Label Studio', 'OpenCV', 'PyTorch'],
    image: '/images/projects/yolo-detection.svg',
    imageAlt:
      'Object detection visualisation showing labelled bounding boxes with confidence scores over an abstract scene',
    github: '',
    demo: '',
    onHome: true,
  },

  {
    id: 'chrome-text-editor',
    title: 'Advanced Text Editor — Chrome Extension',
    category: 'Software',
    period: 'Jan 2026 — present',
    description:
      'A text and code editor extension with cloud storage integration, password protection, and the editing features a scratch buffer in the browser usually lacks.',
    longDescription:
      'Browser scratchpads lose your work and cannot be trusted with anything sensitive.',
    problem:
      'Existing note extensions offer no persistence guarantees, no syntax handling, and no protection for what you leave in them.',
    approach:
      'Built a full editor surface as an extension, wired to cloud storage for persistence and gated behind password protection for private content.',
    results: 'A daily-usable editor that survives browser restarts and keeps private notes private.',
    technologies: ['JavaScript', 'Chrome Extension API', 'Cloud Storage'],
    image: '/images/projects/chrome-editor.svg',
    imageAlt:
      'Browser extension window showing a code editor panel with a toolbar and a lock indicator',
    github: 'https://github.com/pmnafshari/extention_GoogleChrome_TextEditor',
    demo: '',
    onHome: true,
  },

  {
    id: 'eval-warehouse',
    title: 'Model Evaluation Warehouse',
    category: 'Data Engineering',
    period: '2026',
    description:
      'A dimensional warehouse over the evaluation results of the meningioma thesis — dbt on PostgreSQL, orchestrated by Airflow, with the curve-level fact replayed through Kafka.',
    longDescription:
      'Model evaluation output tends to live in notebooks and CSVs, where it cannot be queried or compared across runs.',
    problem:
      'Thesis experiments produced results per curve, per fold, per model, per date — with no way to ask a question across all of them at once.',
    approach:
      'Modelled the results dimensionally with dbt on PostgreSQL, orchestrated the transformations with Airflow, and replayed the curve-level fact through Kafka to exercise the pipeline as a stream rather than a batch.',
    results:
      'Evaluation history became queryable: model against model, fold against fold, run against run.',
    technologies: ['dbt', 'PostgreSQL', 'Airflow', 'Kafka', 'Dimensional Modeling'],
    image: '/images/projects/eval-warehouse.svg',
    imageAlt:
      'Star schema diagram showing a central fact table connected to surrounding dimension tables',
    github: 'https://github.com/pmnafshari/project_monitoring',
    demo: '',
    onHome: false,
  },

  {
    id: 'voice-task-manager',
    title: 'Voice-Controlled Task Manager',
    category: 'AI Systems',
    period: 'Feb 2026 — present',
    description:
      'A voice assistant that reads, adds, updates, and deletes tasks in a Notion database through conversation, using Gemini for understanding and natural speech for replies.',
    longDescription:
      'Task capture fails when it requires stopping what you are doing to open an app.',
    problem: 'The friction of task entry is the reason tasks go uncaptured.',
    approach:
      'Connected a speech interface to the Notion API through Google Gemini, supporting the full read/add/update/delete cycle by voice with spoken confirmation.',
    results: 'Hands-free task management against a live Notion database.',
    technologies: ['Python', 'Google Gemini', 'Notion API', 'Speech Synthesis'],
    image: '/images/projects/task-manager.svg',
    imageAlt:
      'Voice command flowing into create, update, and delete operations against a task database',
    github: 'https://github.com/pmnafshari/AI-Voice-Agent---Task-Manager-',
    demo: '',
    onHome: false,
  },

  {
    id: 'lightrag',
    title: 'LightRAG Retrieval Pipeline',
    category: 'AI Systems',
    period: 'Nov 2025',
    description:
      'A retrieval-augmented generation pipeline combining document chunking, vector retrieval, and knowledge-graph integration, with hybrid search for contextual grounding.',
    longDescription:
      'Pure vector retrieval loses the relationships between entities that a knowledge graph keeps.',
    problem:
      'Semantic similarity alone retrieves passages that read relevant but miss the entity relationships a question actually depends on.',
    approach:
      'Built a LightRAG pipeline with document chunking and vector retrieval, layered a knowledge graph over it, and combined both through hybrid search.',
    results: 'Better grounding and fewer unsupported claims in generated responses.',
    technologies: ['Python', 'LightRAG', 'Knowledge Graphs', 'Vector Search'],
    image: '/images/projects/lightrag.svg',
    imageAlt:
      'Knowledge graph with linked entity nodes beside a stack of retrieved document chunks',
    github: '',
    demo: '',
    onHome: false,
  },

  {
    id: 'food-classification',
    title: 'Food Classification with Vision Transformers',
    category: 'Computer Vision',
    period: 'Aug — Oct 2025',
    description:
      'Fine-tuned a Vision Transformer for food image classification, evaluated with precision–recall and tuned through hyperparameter search.',
    longDescription:
      'Fine-grained classification is where ViTs earn their keep — visually similar classes separated by fine detail.',
    problem:
      'Food categories are visually close to one another, and overall accuracy hides which classes a model confuses.',
    approach:
      'Fine-tuned a pretrained ViT on the target categories, evaluating with per-class precision and recall rather than aggregate accuracy.',
    results: 'Improved classification performance through systematic hyperparameter tuning.',
    technologies: ['Python', 'PyTorch', 'Vision Transformer', 'Transfer Learning'],
    image: '/images/projects/food-vit.svg',
    imageAlt:
      'Image grid decomposed into patch tokens feeding a transformer classification head',
    github: '',
    demo: '',
    onHome: false,
  },

  {
    id: 'vr-analytics',
    title: 'VR User Behaviour Analytics',
    category: 'Software',
    period: 'Dec 2025 — present',
    description:
      'Instrumenting a task-oriented VR system with conversational actions to capture and analyse how users actually move through it.',
    technologies: ['VR', 'Behavioural Analytics', 'Interaction Design'],
    image: '/images/projects/vr-analytics.svg',
    imageAlt: 'Headset view frustum with gaze and movement trails across a spatial grid',
    github: '',
    demo: '',
    onHome: false,
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const homeProjects = projects.filter((p) => p.onHome && !p.featured);
export const categories = ['All', ...new Set(projects.map((p) => p.category))];
