
//Webhook Event names from https://developer.github.com/webhooks/#events
export const enum GitHubWebhookEventType {
	CommitComment = 'commit_comment',
	Create = 'create',
	Delete = 'delete',
	Deployment = 'deployment',
	DeploymentStatus = 'deployment_status',
	Fork = 'fork',
	Gollum = 'gollum',
	Installation = 'installation_repositories',
	IssueComment = 'issue_comment',
	Issues = 'issues',
	Label = 'label',
	MarketplacePurchase = 'marketplace_purchase',
	Member = 'member',
	Membership = 'membership',
	Milestone = 'milestone',
	Organization = 'organization',
	OrgBlock = 'org_block',
	PageBuild = 'page_build',
	ProjectCard = 'project_card',
	ProjectColumn = 'project_column',
	Project = 'project',
	Public = 'public',
	PullRequest = 'pull_request',
	PullRequestReview = 'pull_request_review',
	PullRequestReviewComment = 'pull_request_review_comment',
	Push = 'push',
	Repository = 'repository',
	Release = 'release',
	Status = 'status',
	Team = 'team',
	TeamAdd = 'team_add',
	Watch = 'watch'

}

export interface GithubWebhookEvent {
	type: GitHubWebhookEventType
}
