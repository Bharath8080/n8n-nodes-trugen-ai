# n8n-nodes-trugen

This is an n8n community node to interact with the **Trugen API**. It provides a simplified and powerful way to deploy interactive video agents directly from your n8n workflows.

## Features

- **Agent**: Create and deploy a new interactive video agent with full control over LLM, TTS, and STT settings.
- **Avatar**: Fetch all available stock and custom avatars.
- **Conversation**: Retrieve detailed information about a specific conversation, including status and transcripts.

## Operations

### Agent

- **Create**: Deploy a new interactive video agent.
  - **Persona**: Set the agent's name, system prompt, and greeting.
  - **Capabilities**: Enable Webcam and Screen Vision.
  - **AI Config**: Configure LLM (OpenAI, Groq, Google), TTS (ElevenLabs), and STT (Deepgram).
  - **Avatar**: Choose from stock avatars or provide a custom Avatar ID.

### Avatar

- **Get**: List all available avatars (public and private) to use in your agent configurations.

### Conversation

- **Get**: Retrieve the details of a specific conversation using its ID.
  - **Wait for Completion**: Optionally poll the API until the conversation status reaches "completed".

---

## Installation

### Local Development / Manual Setup

To set up this node on your local machine for development or testing, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Bharath8080/n8n-nodes-trugen-ai.git
   cd n8n-nodes-trugen-ai
   ```

2. **Install Dependencies and Build**:

   ```bash
   npm install
   npm run build
   ```

3. **Link the Package Locally**:
   This makes the package available on your system to be linked elsewhere.

   ```bash
   npm link
   ```

4. **Create the n8n Custom Directory**:
   If you haven't already, create the directory where n8n looks for custom nodes.

   **Windows (PowerShell):**

   ```powershell
   mkdir -Force $HOME\.n8n\nodes
   ```

   **Linux/Mac:**

   ```bash
   mkdir -p ~/.n8n/nodes
   ```

5. **Link to n8n**:
   Navigate to your n8n nodes directory and link the Trugen package.

   **Windows (PowerShell):**

   ```powershell
   Set-Location "$HOME\.n8n\nodes"
   npm link n8n-nodes-trugen
   ```

   **Linux/Mac:**

   ```bash
   cd ~/.n8n/nodes
   npm link n8n-nodes-trugen
   ```

6. **Start n8n**:
   ```bash
   n8n start
   ```

---

## Credentials

You need a **Trugen API Key** to use this node.

1. In n8n, go to **Credentials** > **New**.
2. Search for **Trugen API**.
3. Enter your **API Key** (retrieved from your Trugen dashboard).

## Resources

- **Website**: [trugen.ai](https://trugen.ai/)
- **Documentation**: [docs.trugen.ai](https://docs.trugen.ai)
- **Support**: support@trugen.ai
- **Repository**: [GitHub](https://github.com/Bharath8080/n8n-nodes-trugen-ai)
