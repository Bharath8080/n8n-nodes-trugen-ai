/**
 * Type definitions for Trugen API
 */

/**
 * Common payload fields across events
 */
export interface BasePayload {
	[key: string]: unknown;
}

export interface AgentSpeakingPayload extends BasePayload {
	text: string;
}

export interface UserSpeakingPayload extends BasePayload {
	// Empty in documentation examples
}

export interface ParticipantLeftPayload extends BasePayload {
	id: string;
}

export interface UtteranceCommittedPayload extends BasePayload {
	text: string;
}

export interface MaxCallDurationPayload extends BasePayload {
	call_duration: number;
	max_call_duration: number;
}

/**
 * Event structure
 */
export interface WebhookEvent {
	name: string;
	payload: AgentSpeakingPayload | UserSpeakingPayload | ParticipantLeftPayload | UtteranceCommittedPayload | MaxCallDurationPayload | BasePayload;
}

/**
 * Main Webhook Data Structure
 */
export interface TrugenWebhookData {
	timestamp: number;
	conversation_id: string;
	type: string;
	event: WebhookEvent;
}


