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
  publicLabel: "How the pattern works",
  storyTitle: "The four moves from scattered context to a useful question.",
  storyIntro:
    "Follow the sequence StrategicAI is built for: gather what people know, make the relationships visible, let a human correct the picture, then ask a better question.",
  actors: [],
  operatingProblem: null,
  frames: [
    {
      id: "evidence",
      navLabel: "Evidence",
      eyebrow: "What people know",
      headline: "Gather the pieces that already exist.",
      body: "People, systems, files, meetings, and memory each hold part of the operating story.",
      durationSeconds: 8,
      media: neutralFrameMedia(
        "/images/homepage-proof-evidence-placeholder.svg",
        "Illustration of people and systems contributing different pieces of business context",
      ),
    },
    {
      id: "picture",
      navLabel: "Picture",
      eyebrow: "What the picture shows",
      headline: "Make the relationships visible.",
      body: "Connect people, work, systems, dependencies, and unknowns around the question that matters.",
      durationSeconds: 11,
      media: neutralFrameMedia(
        "/images/homepage-proof-picture-placeholder.svg",
        "Illustration of people, work, systems, dependencies, and unknowns connected in an operating picture",
      ),
    },
    {
      id: "correction",
      navLabel: "Correction",
      eyebrow: "What gets corrected",
      headline: "Let the owner challenge the picture.",
      body: "A useful picture has room for a human to say, ‘No. That’s not how it works,’ and change what is accepted.",
      durationSeconds: 15,
      media: neutralFrameMedia(
        "/images/homepage-proof-correction-placeholder.svg",
        "Illustration of a human correction changing an operating picture",
      ),
    },
    {
      id: "question",
      navLabel: "Question",
      eyebrow: "What you can ask next",
      headline: "Follow a question through the context.",
      body: "Once the relationships are visible, Nemo can help you reason from company context instead of starting from a blank prompt.",
      durationSeconds: 11,
      media: neutralFrameMedia(
        "/images/homepage-proof-question-placeholder.svg",
        "Illustration of a question following relationships through company context",
      ),
    },
  ],
};

