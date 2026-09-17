export type GoldenProofStatus = "AWAITING_REAL_PROOF" | "ACCEPTED_PROOF";

export type GoldenProofMedia = {
  desktop: string;
  mobile?: string;
  intrinsicWidth: number;
  intrinsicHeight: number;
  aspectRatio: number;
  alt: string;
  caption?: string;
  inspectable: boolean;
  loading: "eager" | "lazy";
};

export type GoldenProofCorrection = {
  before?: GoldenProofMedia;
  humanCorrection: string;
  after?: GoldenProofMedia;
};

export type GoldenProofFrame = {
  id: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  body: string;
  durationSeconds: number;
  media: GoldenProofMedia;
  correction?: GoldenProofCorrection;
};

export type GoldenProofThread = {
  status: GoldenProofStatus;
  publicLabel: string;
  storyTitle: string;
  storyIntro: string;
  actors: string[];
  operatingProblem: string | null;
  frames: GoldenProofFrame[];
};

const neutralFrameMedia = (desktop: string, alt: string): GoldenProofMedia => ({
  desktop,
  intrinsicWidth: 1600,
  intrinsicHeight: 1000,
  aspectRatio: 1.6,
  alt,
  inspectable: false,
  loading: "lazy",
});

/**
 * The single website-owned seam for the Golden Proof Thread.
 * A future accepted proof bundle replaces this object without changing the
 * homepage interaction, responsive media handling, or tracking contract.
 */
export const goldenProofThread: GoldenProofThread = {
  status: "AWAITING_REAL_PROOF",
  publicLabel: "Illustrative example · not a customer result",
  storyTitle: "Follow one handoff from disagreement to a better question.",
  storyIntro:
    "This illustrative example shows the sequence StrategicAI is built for: gather what people know, make the relationships visible, let a human correct the picture, then ask a better question.",
  actors: ["Sales", "Operations", "Finance"],
  operatingProblem: "A customer handoff is marked complete, but Operations cannot start the work.",
  frames: [
    {
      id: "evidence",
      navLabel: "Evidence",
      eyebrow: "Sales and Operations see the handoff differently",
      headline: "Gather the evidence before choosing a fix.",
      body: "Sales says, “We handed the customer off Tuesday.” Operations says, “We did not have the information needed to start.” Both perspectives are evidence.",
      durationSeconds: 8,
      media: neutralFrameMedia(
        "/images/homepage-proof-evidence-placeholder.svg",
        "Illustration of Sales and Operations contributing different pieces of customer handoff context",
      ),
    },
    {
      id: "picture",
      navLabel: "Picture",
      eyebrow: "The definition of complete is different",
      headline: "Make the disagreement part of the picture.",
      body: "The handoff exists, but the teams mean different things by “complete.” The missing information and the untracked Finance approval are now visible relationships—not hidden assumptions.",
      durationSeconds: 11,
      media: neutralFrameMedia(
        "/images/homepage-proof-picture-placeholder.svg",
        "Illustration of a customer handoff connected to teams, required information, and a Finance dependency",
      ),
    },
    {
      id: "correction",
      navLabel: "Correction",
      eyebrow: "Operations corrects the missing dependency",
      headline: "Let the people closest to the work correct it.",
      body: "Operations says, “That’s not the actual dependency. We also need approval from Finance.” The picture becomes more useful because the correction stays visible.",
      durationSeconds: 15,
      media: neutralFrameMedia(
        "/images/homepage-proof-correction-placeholder.svg",
        "Illustration of Operations correcting an incomplete customer handoff picture",
      ),
    },
    {
      id: "question",
      navLabel: "Ask Nemo",
      eyebrow: "A better question follows the picture",
      headline: "Ask where the same dependency appears elsewhere.",
      body: "With the available context in view, Nemo can help you reason about where this process depends on information one team does not know another team needs.",
      durationSeconds: 11,
      media: neutralFrameMedia(
        "/images/homepage-proof-question-placeholder.svg",
        "Illustration of a question tracing hidden dependencies through company context",
      ),
    },
  ],
};
