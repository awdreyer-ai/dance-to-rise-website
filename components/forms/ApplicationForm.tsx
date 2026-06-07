"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface ApplicationFormData {
  // Step 1 - Dancer 1
  dancer1FullName: string;
  dancer1Dob: string;
  dancer1Gender: string;
  dancer1School: string;
  dancer1Grade: string;
  dancer1Area: string;
  dancer1GuardianName: string;
  dancer1GuardianRelationship: string;
  dancer1GuardianPhone: string;
  dancer1GuardianEmail: string;
  dancer1GuardianConsent: boolean;
  // Step 2 - Dancer 2
  dancer2FullName: string;
  dancer2Dob: string;
  dancer2Gender: string;
  dancer2School: string;
  dancer2Grade: string;
  dancer2Area: string;
  dancer2GuardianName: string;
  dancer2GuardianRelationship: string;
  dancer2GuardianPhone: string;
  dancer2GuardianEmail: string;
  dancer2GuardianConsent: boolean;
  // Step 3 - Dance Info
  studioName: string;
  coachName: string;
  coachPhone: string;
  coachEmail: string;
  dancedTogether: string;
  stylesCompeted: string[];
  competitionLevel: string;
  competitionsLast12: number;
  recentResults: string;
  // Step 4 - Financial
  whyApplying: string;
  costChallenges: string[];
  costChallengesOther?: string;
  missedCompetition: string;
  missedExplanation?: string;
  // Step 5 - Motivation
  motivationLetter?: string;
  // Step 6 - Coach Recommendation
  coachRecommendation: string;
  coachComments: string;
  coachConfirmation: boolean;
  // Step 7 - Declarations
  guardianDeclaration: boolean;
  mediaConsentWebsite: boolean;
  mediaConsentSocial: boolean;
  mediaConsentFundraising: boolean;
  mediaConsentSponsor: boolean;
  mediaConsentDocumentary: boolean;
  popiaConsent: boolean;
}

const STEPS = [
  "Dancer 1",
  "Dancer 2",
  "Dance Info",
  "Financial",
  "Motivation",
  "Coach",
  "Declarations",
];

const grades = Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`);

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-300 text-[#1A1A1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#28BACC] focus:border-transparent text-sm transition-colors";
const errorClass = "mt-1 text-xs text-[#C4305A]";
const labelClass = "block text-sm font-medium text-[#1A1A1A] mb-1";

function calcAge(dob: string): number | null {
  if (!dob) return null;
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

function wordCount(text: string): number {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

interface DancerStepProps {
  prefix: "dancer1" | "dancer2";
  label: string;
  register: ReturnType<typeof useForm<ApplicationFormData>>["register"];
  errors: ReturnType<typeof useForm<ApplicationFormData>>["formState"]["errors"];
  dobValue?: string;
  nameValue?: string;
}

function DancerStep({ prefix, label, register, errors, dobValue, nameValue }: DancerStepProps) {
  const age = calcAge(dobValue || "");

  return (
    <div className="space-y-5">
      <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2547B2]">
        {label}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className={labelClass}>
            Full Name <span className="text-[#C4305A]">*</span>
          </label>
          <input
            {...register(`${prefix}FullName` as keyof ApplicationFormData, {
              required: "Full name is required",
            })}
            type="text"
            placeholder="First and last name"
            className={`${inputClass} ${errors[`${prefix}FullName` as keyof typeof errors] ? "border-[#C4305A]" : ""}`}
          />
          {errors[`${prefix}FullName` as keyof typeof errors] && (
            <p className={errorClass}>{(errors[`${prefix}FullName` as keyof typeof errors] as { message?: string })?.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>
            Date of Birth <span className="text-[#C4305A]">*</span>
          </label>
          <input
            {...register(`${prefix}Dob` as keyof ApplicationFormData, { required: "Date of birth is required" })}
            type="date"
            className={`${inputClass} ${errors[`${prefix}Dob` as keyof typeof errors] ? "border-[#C4305A]" : ""}`}
          />
          {errors[`${prefix}Dob` as keyof typeof errors] && (
            <p className={errorClass}>{(errors[`${prefix}Dob` as keyof typeof errors] as { message?: string })?.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>Age</label>
          <div className={`${inputClass} bg-gray-50 text-[#555555]`}>
            {age !== null ? `${age} years old` : "Auto-calculated from date of birth"}
          </div>
        </div>

        <div>
          <label className={labelClass}>
            Gender <span className="text-[#C4305A]">*</span>
          </label>
          <select
            {...register(`${prefix}Gender` as keyof ApplicationFormData, { required: "Gender is required" })}
            className={`${inputClass} ${errors[`${prefix}Gender` as keyof typeof errors] ? "border-[#C4305A]" : ""}`}
          >
            <option value="">Select</option>
            <option>Female</option>
            <option>Male</option>
            <option>Prefer not to say</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>
            School Name <span className="text-[#C4305A]">*</span>
          </label>
          <input
            {...register(`${prefix}School` as keyof ApplicationFormData, { required: "School name is required" })}
            type="text"
            placeholder="Name of school"
            className={`${inputClass} ${errors[`${prefix}School` as keyof typeof errors] ? "border-[#C4305A]" : ""}`}
          />
        </div>

        <div>
          <label className={labelClass}>
            Current Grade <span className="text-[#C4305A]">*</span>
          </label>
          <select
            {...register(`${prefix}Grade` as keyof ApplicationFormData, { required: "Grade is required" })}
            className={`${inputClass} ${errors[`${prefix}Grade` as keyof typeof errors] ? "border-[#C4305A]" : ""}`}
          >
            <option value="">Select grade</option>
            {grades.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>
            Area or City <span className="text-[#C4305A]">*</span>
          </label>
          <input
            {...register(`${prefix}Area` as keyof ApplicationFormData, { required: "Area is required" })}
            type="text"
            placeholder="e.g. Johannesburg, Cape Town"
            className={`${inputClass} ${errors[`${prefix}Area` as keyof typeof errors] ? "border-[#C4305A]" : ""}`}
          />
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <h3 className="font-semibold text-[#1A1A1A] mb-4">Parent / Guardian Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className={labelClass}>
              Parent / Guardian Full Name <span className="text-[#C4305A]">*</span>
            </label>
            <input
              {...register(`${prefix}GuardianName` as keyof ApplicationFormData, { required: "Guardian name is required" })}
              type="text"
              placeholder="Full name"
              className={`${inputClass} ${errors[`${prefix}GuardianName` as keyof typeof errors] ? "border-[#C4305A]" : ""}`}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>
              Relationship to Dancer <span className="text-[#C4305A]">*</span>
            </label>
            <select
              {...register(`${prefix}GuardianRelationship` as keyof ApplicationFormData, { required: "Please select a relationship" })}
              className={`${inputClass} ${errors[`${prefix}GuardianRelationship` as keyof typeof errors] ? "border-[#C4305A]" : ""}`}
            >
              <option value="">Select relationship</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Legal Guardian</option>
              <option>Other</option>
            </select>
            {errors[`${prefix}GuardianRelationship` as keyof typeof errors] && (
              <p className={errorClass}>{(errors[`${prefix}GuardianRelationship` as keyof typeof errors] as { message?: string })?.message}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>
              Parent or Guardian Telephone <span className="text-[#C4305A]">*</span>
            </label>
            <input
              {...register(`${prefix}GuardianPhone` as keyof ApplicationFormData, { required: "Telephone number is required" })}
              type="tel"
              placeholder="+27 XX XXX XXXX"
              className={`${inputClass} ${errors[`${prefix}GuardianPhone` as keyof typeof errors] ? "border-[#C4305A]" : ""}`}
            />
          </div>
          <div>
            <label className={labelClass}>
              Parent or Guardian Email <span className="text-[#C4305A]">*</span>
            </label>
            <input
              {...register(`${prefix}GuardianEmail` as keyof ApplicationFormData, {
                required: "Guardian email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
              })}
              type="email"
              placeholder="guardian@email.com"
              className={`${inputClass} ${errors[`${prefix}GuardianEmail` as keyof typeof errors] ? "border-[#C4305A]" : ""}`}
            />
            {errors[`${prefix}GuardianEmail` as keyof typeof errors] && (
              <p className={errorClass}>{(errors[`${prefix}GuardianEmail` as keyof typeof errors] as { message?: string })?.message}</p>
            )}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              {...register(`${prefix}GuardianConsent` as keyof ApplicationFormData, {
                required: "Parental consent is required to proceed",
              })}
              type="checkbox"
              className="w-4 h-4 mt-0.5 accent-[#2547B2] flex-shrink-0"
            />
            <span className="text-sm text-[#1A1A1A]">
              I, the parent or guardian of{" "}
              <strong>{nameValue || "this dancer"}</strong>, consent to this application being
              submitted to Dance to Rise Foundation and confirm that all information provided is
              true and accurate. <span className="text-[#C4305A]">*</span>
            </span>
          </label>
          {errors[`${prefix}GuardianConsent` as keyof typeof errors] && (
            <p className={`${errorClass} mt-2`}>{(errors[`${prefix}GuardianConsent` as keyof typeof errors] as { message?: string })?.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [isReading, setIsReading] = useState(false);
  const [fileUploadError, setFileUploadError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    defaultValues: {
      stylesCompeted: [],
      costChallenges: [],
      dancer1GuardianConsent: false,
      dancer2GuardianConsent: false,
      mediaConsentWebsite: false,
      mediaConsentSocial: false,
      mediaConsentFundraising: false,
      mediaConsentSponsor: false,
      mediaConsentDocumentary: false,
    },
  });

  const watchMissed = watch("missedCompetition");
  const watchMotivation = watch("motivationLetter", "");
  const watchWhyApplying = watch("whyApplying", "");
  const watchCoachName = watch("coachName", "");
  const watchCostChallenges = watch("costChallenges", []);
  const dancer1Name = watch("dancer1FullName", "");
  const dancer2Name = watch("dancer2FullName", "");
  const hasOtherChallenge = Array.isArray(watchCostChallenges) && watchCostChallenges.includes("Other");

  const stepFields: Record<number, (keyof ApplicationFormData)[]> = {
    0: ["dancer1FullName", "dancer1Dob", "dancer1Gender", "dancer1School", "dancer1Grade", "dancer1Area", "dancer1GuardianName", "dancer1GuardianRelationship", "dancer1GuardianPhone", "dancer1GuardianEmail", "dancer1GuardianConsent"],
    1: ["dancer2FullName", "dancer2Dob", "dancer2Gender", "dancer2School", "dancer2Grade", "dancer2Area", "dancer2GuardianName", "dancer2GuardianRelationship", "dancer2GuardianPhone", "dancer2GuardianEmail", "dancer2GuardianConsent"],
    2: ["studioName", "coachName", "coachPhone", "coachEmail", "dancedTogether", "competitionLevel"],
    3: ["whyApplying", "costChallengesOther"],
    4: [],
    5: ["coachRecommendation", "coachComments", "coachConfirmation"],
    6: ["guardianDeclaration", "popiaConsent"],
  };

  const handleNext = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const payload = {
        ...data,
        motivationFileName: fileName || undefined,
        motivationFileType: fileType || undefined,
        motivationFileBase64: fileBase64 || undefined,
      };
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Submission failed");
      router.push(`/thank-you?ref=${json.referenceNumber}`);
    } catch (e) {
      setSubmitError((e as Error).message || "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const dancer1Dob = watch("dancer1Dob");
  const dancer2Dob = watch("dancer2Dob");
  const motivationWords = wordCount(watchMotivation || "");
  const whyWords = wordCount(watchWhyApplying || "");

  return (
    <div className="max-w-2xl mx-auto">
      {/* PROGRESS BAR */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
                  i < step
                    ? "bg-[#28BACC] text-white"
                    : i === step
                    ? "bg-[#2547B2] text-white"
                    : "bg-gray-200 text-[#555555]"
                }`}
              >
                {i < step ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className="text-[10px] text-[#555555] hidden sm:block">{s}</span>
            </div>
          ))}
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#2547B2] rounded-full transition-all duration-300"
            style={{ width: `${((step) / (STEPS.length - 1)) * 100}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-[#555555] text-center">
          Step {step + 1} of {STEPS.length} — {STEPS[step]}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={`bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 transition-all duration-200`}>

          {/* STEP 1: Dancer 1 */}
          {step === 0 && (
            <DancerStep prefix="dancer1" label="Dancer 1 Information" register={register} errors={errors} dobValue={dancer1Dob} nameValue={dancer1Name} />
          )}

          {/* STEP 2: Dancer 2 */}
          {step === 1 && (
            <DancerStep prefix="dancer2" label="Dancer 2 Information" register={register} errors={errors} dobValue={dancer2Dob} nameValue={dancer2Name} />
          )}

          {/* STEP 3: Dance Information */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2547B2]">
                Dance Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className={labelClass}>Dance Studio or Club Name <span className="text-[#C4305A]">*</span></label>
                  <input {...register("studioName", { required: "Studio name is required" })} type="text" placeholder="Studio or club name" className={`${inputClass} ${errors.studioName ? "border-[#C4305A]" : ""}`} />
                  {errors.studioName && <p className={errorClass}>{errors.studioName.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Coach Full Name <span className="text-[#C4305A]">*</span></label>
                  <input {...register("coachName", { required: "Coach name is required" })} type="text" placeholder="Coach's full name" className={`${inputClass} ${errors.coachName ? "border-[#C4305A]" : ""}`} />
                  {errors.coachName && <p className={errorClass}>{errors.coachName.message}</p>}
                </div>
                <div>
                  <label className={labelClass}>Coach Phone <span className="text-[#C4305A]">*</span></label>
                  <input {...register("coachPhone", { required: "Coach phone is required" })} type="tel" placeholder="+27 XX XXX XXXX" className={`${inputClass} ${errors.coachPhone ? "border-[#C4305A]" : ""}`} />
                </div>
                <div>
                  <label className={labelClass}>Coach Email <span className="text-[#C4305A]">*</span></label>
                  <input {...register("coachEmail", {
                    required: "Coach email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                  })} type="email" placeholder="coach@studio.co.za" className={`${inputClass} ${errors.coachEmail ? "border-[#C4305A]" : ""}`} />
                  {errors.coachEmail && <p className={errorClass}>{errors.coachEmail.message}</p>}
                </div>
                <div>
                  <label className={labelClass}>How long have you danced together? <span className="text-[#C4305A]">*</span></label>
                  <select {...register("dancedTogether", { required: "Please select a duration" })} className={`${inputClass} ${errors.dancedTogether ? "border-[#C4305A]" : ""}`}>
                    <option value="">Select</option>
                    <option>Less than 1 year</option>
                    <option>1–2 years</option>
                    <option>3–5 years</option>
                    <option>More than 5 years</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Competition Level <span className="text-[#C4305A]">*</span></label>
                  <select {...register("competitionLevel", { required: "Please select a level" })} className={`${inputClass} ${errors.competitionLevel ? "border-[#C4305A]" : ""}`}>
                    <option value="">Select</option>
                    <option>Beginner</option>
                    <option>Bronze</option>
                    <option>Silver</option>
                    <option>Gold</option>
                    <option>Novice</option>
                    <option>Pre-Championship</option>
                    <option>Championship</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Competitions in past 12 months</label>
                  <input {...register("competitionsLast12", { min: 0, valueAsNumber: true })} type="number" min="0" placeholder="0" className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Styles Competed</label>
                <div className="flex flex-wrap gap-4 mt-1">
                  {["Ballroom", "Latin-American", "Both"].map((style) => (
                    <label key={style} className="flex items-center gap-2 cursor-pointer">
                      <input {...register("stylesCompeted")} type="checkbox" value={style} className="w-4 h-4 rounded accent-[#2547B2]" />
                      <span className="text-sm text-[#1A1A1A]">{style}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass}>Recent Results (optional)</label>
                <textarea {...register("recentResults", { maxLength: { value: 300, message: "Max 300 characters" } })} rows={3} placeholder="Your best recent competition results..." className={`${inputClass} resize-none`} />
              </div>
            </div>
          )}

          {/* STEP 4: Financial */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2547B2]">
                Financial Circumstances
              </h2>
              <div>
                <label className={labelClass}>
                  Why are you applying to Dance to Rise Foundation? <span className="text-[#C4305A]">*</span>
                </label>
                <p className="text-xs text-[#555555] mb-2">Minimum 100 words, maximum 500 words.</p>
                <textarea
                  {...register("whyApplying", {
                    required: "This field is required",
                    validate: (val) => wordCount(val) >= 100 || "Please write at least 100 words",
                  })}
                  rows={8}
                  placeholder="Tell us about your financial situation and why you need support..."
                  className={`${inputClass} resize-none ${errors.whyApplying ? "border-[#C4305A]" : ""}`}
                />
                <div className="flex justify-between mt-1">
                  {errors.whyApplying && <p className={errorClass}>{errors.whyApplying.message}</p>}
                  <span className={`text-xs ml-auto ${whyWords > 500 ? "text-[#C4305A]" : whyWords >= 100 ? "text-[#28BACC]" : "text-[#555555]"}`}>
                    {whyWords}/500 words
                  </span>
                </div>
              </div>
              <div>
                <label className={labelClass}>Greatest Cost Challenges</label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {["Competition entry fees", "Transport", "Dance shoes", "Training costs", "Competition meals", "Competition clothing", "Other"].map((challenge) => (
                    <label key={challenge} className="flex items-center gap-2 cursor-pointer">
                      <input {...register("costChallenges")} type="checkbox" value={challenge} className="w-4 h-4 rounded accent-[#2547B2]" />
                      <span className="text-sm text-[#1A1A1A]">{challenge}</span>
                    </label>
                  ))}
                </div>
                {hasOtherChallenge && (
                  <div className="mt-3">
                    <label className={labelClass}>
                      Please specify your other financial challenge <span className="text-[#C4305A]">*</span>
                    </label>
                    <textarea
                      {...register("costChallengesOther", {
                        validate: (val) =>
                          !hasOtherChallenge ||
                          (!!val && val.trim().length > 0) ||
                          "Please describe your other financial challenge",
                      })}
                      rows={3}
                      placeholder="Describe the other cost or financial challenge you face"
                      className={`${inputClass} resize-none ${errors.costChallengesOther ? "border-[#C4305A]" : ""}`}
                    />
                    {errors.costChallengesOther && (
                      <p className={errorClass}>{errors.costChallengesOther.message}</p>
                    )}
                  </div>
                )}
              </div>
              <div>
                <label className={labelClass}>Have you ever missed a competition due to cost?</label>
                <div className="flex gap-6 mt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input {...register("missedCompetition")} type="radio" value="Yes" className="w-4 h-4 accent-[#2547B2]" />
                    <span className="text-sm text-[#1A1A1A]">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input {...register("missedCompetition")} type="radio" value="No" className="w-4 h-4 accent-[#2547B2]" />
                    <span className="text-sm text-[#1A1A1A]">No</span>
                  </label>
                </div>
              </div>
              {watchMissed === "Yes" && (
                <div>
                  <label className={labelClass}>Please explain</label>
                  <textarea
                    {...register("missedExplanation", { maxLength: { value: 300, message: "Max 300 characters" } })}
                    rows={3}
                    placeholder="Describe the competition(s) you missed and why..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              )}
            </div>
          )}

          {/* STEP 5: Motivation */}
          {step === 4 && (
            <div className="space-y-5">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2547B2]">
                Motivation Letter
              </h2>
              <p className="text-sm text-[#555555]">
                Tell us about your dance journey, what dance means to you, your goals, challenges
                you have faced, and how Dance to Rise Foundation support would impact your future.
              </p>

              {/* Instructions */}
              <div className="p-4 bg-[#EFF8FF] rounded-xl border border-[#28BACC]/30 text-sm text-[#1A1A1A]">
                <strong>You may type your motivation letter below OR upload a file.</strong>
                <br />
                If you upload a file you do not need to type in the text area. Accepted formats: PDF
                or DOCX, maximum 3MB.
              </div>

              {/* File upload section */}
              <div>
                <label className={labelClass}>Upload File (PDF or DOCX, max 3MB)</label>

                {fileName ? (
                  /* File selected — show success state, hide the picker */
                  <div className="mt-1 flex items-center gap-3 p-4 bg-[#F0FDF4] rounded-xl border border-green-200">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-green-800">File attached</p>
                      <p className="text-xs text-green-700 truncate">{fileName}</p>
                    </div>
                    {isReading ? (
                      <span className="text-xs text-[#555555]">Reading…</span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setFileName(null);
                          setFileBase64(null);
                          setFileType(null);
                          setFileUploadError(null);
                          if (fileRef.current) fileRef.current.value = "";
                        }}
                        className="text-xs text-[#C4305A] font-semibold hover:underline flex-shrink-0"
                      >
                        Remove file
                      </button>
                    )}
                  </div>
                ) : (
                  <>
                    <input
                      ref={fileRef}
                      type="file"
                      accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={async (e) => {
                        setFileUploadError(null);
                        const file = e.target.files?.[0];
                        if (!file) return;

                        const allowed = [
                          "application/pdf",
                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        ];
                        if (!allowed.includes(file.type) && !file.name.match(/\.(pdf|docx)$/i)) {
                          setFileUploadError("Only PDF or DOCX files are accepted.");
                          e.target.value = "";
                          return;
                        }
                        if (file.size > 3 * 1024 * 1024) {
                          setFileUploadError("File is too large. Maximum size is 3MB.");
                          e.target.value = "";
                          return;
                        }

                        setFileName(file.name);
                        setFileType(file.type);
                        setIsReading(true);
                        try {
                          const base64 = await new Promise<string>((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = () => resolve((reader.result as string).split(",")[1]);
                            reader.onerror = reject;
                            reader.readAsDataURL(file);
                          });
                          setFileBase64(base64);
                        } catch {
                          setFileUploadError("Could not read the file. Please try again or type your letter below.");
                          setFileName(null);
                          setFileType(null);
                          e.target.value = "";
                        } finally {
                          setIsReading(false);
                        }
                      }}
                      className="mt-1 block w-full text-sm text-[#555555] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#2547B2]/10 file:text-[#2547B2] hover:file:bg-[#2547B2]/20 transition-colors cursor-pointer"
                    />
                    {fileUploadError && (
                      <p className="mt-2 text-xs text-[#C4305A] font-medium">{fileUploadError}</p>
                    )}
                  </>
                )}
              </div>

              {/* Textarea — only shown when no file is attached */}
              {!fileName && (
                <>
                  <div className="text-center text-[#555555] text-sm font-medium">— OR —</div>
                  <div>
                    <label className={labelClass}>
                      Type your motivation letter{" "}
                      <span className="font-normal text-[#555555]">(min 500 words, max 1000 words)</span>
                    </label>
                    <textarea
                      {...register("motivationLetter", {
                        validate: (val) => {
                          if (!fileName && (!val || wordCount(val) < 500))
                            return "Please write at least 500 words, or upload a file above";
                          if (val && wordCount(val) > 1000) return "Maximum 1000 words";
                          return true;
                        },
                      })}
                      rows={12}
                      placeholder="Start writing your motivation letter here..."
                      className={`${inputClass} resize-none ${errors.motivationLetter ? "border-[#C4305A]" : ""}`}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.motivationLetter && (
                        <p className={errorClass}>{errors.motivationLetter.message}</p>
                      )}
                      <span
                        className={`text-xs ml-auto ${
                          motivationWords > 1000
                            ? "text-[#C4305A]"
                            : motivationWords >= 500
                            ? "text-[#28BACC]"
                            : "text-[#555555]"
                        }`}
                      >
                        {motivationWords} / 1000 words
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* STEP 6: Coach Recommendation */}
          {step === 5 && (
            <div className="space-y-5">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2547B2]">
                Coach Recommendation
              </h2>
              <div className="p-4 bg-[#F7F9FC] rounded-xl border border-gray-200">
                <p className="text-sm text-[#555555]">
                  <strong className="text-[#1A1A1A]">Coach:</strong>{" "}
                  {watchCoachName || <span className="italic">Coach name from Step 3</span>}
                </p>
              </div>
              <div>
                <label className={labelClass}>
                  Strength of Recommendation <span className="text-[#C4305A]">*</span>
                </label>
                <div className="space-y-2 mt-1">
                  {["Strongly Recommend", "Recommend", "Recommend with Reservations"].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:border-[#2547B2] transition-colors">
                      <input
                        {...register("coachRecommendation", { required: "Please select a recommendation" })}
                        type="radio"
                        value={opt}
                        className="w-4 h-4 accent-[#2547B2]"
                      />
                      <span className="text-sm font-medium text-[#1A1A1A]">{opt}</span>
                    </label>
                  ))}
                </div>
                {errors.coachRecommendation && <p className={errorClass}>{errors.coachRecommendation.message}</p>}
              </div>
              <div>
                <label className={labelClass}>
                  Coach Comments <span className="text-[#C4305A]">*</span>
                </label>
                <p className="text-xs text-[#555555] mb-1">Comments on commitment, work ethic, sportsmanship, and potential. Max 600 characters.</p>
                <textarea
                  {...register("coachComments", {
                    required: "Coach comments are required",
                    maxLength: { value: 600, message: "Max 600 characters" },
                  })}
                  rows={5}
                  placeholder="Describe this couple's commitment, work ethic, sportsmanship, and potential..."
                  className={`${inputClass} resize-none ${errors.coachComments ? "border-[#C4305A]" : ""}`}
                />
                {errors.coachComments && <p className={errorClass}>{errors.coachComments.message}</p>}
              </div>
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    {...register("coachConfirmation", { required: "Coach confirmation is required" })}
                    type="checkbox"
                    className="w-4 h-4 mt-0.5 accent-[#2547B2] flex-shrink-0"
                  />
                  <span className="text-sm text-[#1A1A1A]">
                    I confirm I am the coach of this couple and the information I have provided is accurate.
                  </span>
                </label>
                {errors.coachConfirmation && <p className={errorClass}>{errors.coachConfirmation.message}</p>}
              </div>
            </div>
          )}

          {/* STEP 7: Declarations */}
          {step === 6 && (
            <div className="space-y-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2547B2]">
                Declarations &amp; Consent
              </h2>
              <div className="p-5 bg-[#F7F9FC] rounded-xl border border-gray-200 space-y-4">
                <h3 className="font-semibold text-[#1A1A1A] text-sm">
                  Parent / Guardian Declaration <span className="text-[#C4305A]">*</span>
                </h3>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    {...register("guardianDeclaration", { required: "This declaration is required to submit" })}
                    type="checkbox"
                    className="w-4 h-4 mt-0.5 accent-[#2547B2] flex-shrink-0"
                  />
                  <span className="text-sm text-[#555555]">
                    I declare that all information provided in this application is true, accurate, and complete to the best of my knowledge. I understand that submission of this application does not guarantee selection. I consent to Dance to Rise Foundation contacting references provided.
                  </span>
                </label>
                {errors.guardianDeclaration && <p className={errorClass}>{errors.guardianDeclaration.message}</p>}
              </div>

              <div className="p-5 bg-[#F7F9FC] rounded-xl border border-gray-200 space-y-3">
                <h3 className="font-semibold text-[#1A1A1A] text-sm">
                  Media Consent (all optional)
                </h3>
                <p className="text-xs text-[#555555]">If selected, I consent to photos and information being used in:</p>
                <div className="space-y-2">
                  {[
                    { field: "mediaConsentWebsite" as keyof ApplicationFormData, label: "The Dance to Rise Foundation website" },
                    { field: "mediaConsentSocial" as keyof ApplicationFormData, label: "Social media platforms" },
                    { field: "mediaConsentFundraising" as keyof ApplicationFormData, label: "Fundraising campaigns" },
                    { field: "mediaConsentSponsor" as keyof ApplicationFormData, label: "Sponsor reports" },
                    { field: "mediaConsentDocumentary" as keyof ApplicationFormData, label: "Annual documentary" },
                  ].map(({ field, label }) => (
                    <label key={field} className="flex items-center gap-3 cursor-pointer">
                      <input {...register(field)} type="checkbox" className="w-4 h-4 accent-[#2547B2]" />
                      <span className="text-sm text-[#1A1A1A]">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-[#F7F9FC] rounded-xl border border-gray-200 space-y-3">
                <h3 className="font-semibold text-[#1A1A1A] text-sm">
                  POPIA Consent <span className="text-[#C4305A]">*</span>
                </h3>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    {...register("popiaConsent", { required: "POPIA consent is required to submit" })}
                    type="checkbox"
                    className="w-4 h-4 mt-0.5 accent-[#2547B2] flex-shrink-0"
                  />
                  <span className="text-sm text-[#555555]">
                    I consent to Dance to Rise Foundation collecting and processing my personal information in accordance with POPIA and the Foundation&apos;s{" "}
                    <a href="/privacy" target="_blank" className="text-[#2547B2] underline">Privacy Policy</a>.
                  </span>
                </label>
                {errors.popiaConsent && <p className={errorClass}>{errors.popiaConsent.message}</p>}
              </div>

              {submitError && (
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-sm text-[#C4305A]">{submitError}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between mt-6">
          {step > 0 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-3 border-2 border-[#2547B2] text-[#2547B2] font-semibold rounded-full hover:bg-[#2547B2] hover:text-white transition-colors duration-200"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3 bg-[#2547B2] text-white font-semibold rounded-full hover:bg-[#1d3a8e] transition-colors duration-200"
            >
              Next →
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting || isReading}
              className="px-8 py-3 bg-[#C4305A] text-white font-semibold rounded-full hover:bg-[#A52848] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isReading ? "Reading file..." : isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
