import { isSafePaymentUrl, isSafeEmbedUrl } from "@/lib/constants";

describe("isSafePaymentUrl", () => {
  it("accepts valid PayDunya HTTPS URLs", () => {
    expect(isSafePaymentUrl("https://app.paydunya.com/checkout/abc123")).toBe(true);
    expect(isSafePaymentUrl("https://paydunya.com/payment/xyz")).toBe(true);
  });

  it("accepts subdomains of allowed PayDunya hosts", () => {
    expect(isSafePaymentUrl("https://checkout.app.paydunya.com/pay")).toBe(true);
  });

  it("rejects non-PayDunya URLs", () => {
    expect(isSafePaymentUrl("https://evil.com/checkout")).toBe(false);
    expect(isSafePaymentUrl("https://notpaydunya.com/pay")).toBe(false);
    expect(isSafePaymentUrl("https://paydunya.com.evil.com/pay")).toBe(false);
  });

  it("rejects http:// URLs", () => {
    expect(isSafePaymentUrl("http://app.paydunya.com/checkout/abc123")).toBe(false);
    expect(isSafePaymentUrl("http://paydunya.com/payment/xyz")).toBe(false);
  });

  it("returns false for invalid URLs", () => {
    expect(isSafePaymentUrl("not-a-url")).toBe(false);
    expect(isSafePaymentUrl("")).toBe(false);
    expect(isSafePaymentUrl("ftp://paydunya.com")).toBe(false);
  });
});

describe("isSafeEmbedUrl", () => {
  it("accepts valid Typeform embed URLs", () => {
    expect(isSafeEmbedUrl("https://form.typeform.com/to/abc123")).toBe(true);
  });

  it("accepts valid Google Forms embed URLs", () => {
    expect(isSafeEmbedUrl("https://docs.google.com/forms/d/e/abc/viewform")).toBe(true);
    expect(isSafeEmbedUrl("https://forms.google.com/form/abc")).toBe(true);
  });

  it("accepts valid Tally embed URLs", () => {
    expect(isSafeEmbedUrl("https://tally.so/r/abc123")).toBe(true);
  });

  it("accepts valid Airtable embed URLs", () => {
    expect(isSafeEmbedUrl("https://airtable.com/embed/abc123")).toBe(true);
  });

  it("accepts valid SurveyHero embed URLs", () => {
    expect(isSafeEmbedUrl("https://surveyhero.com/s/abc123")).toBe(true);
  });

  it("rejects malicious embed URLs", () => {
    expect(isSafeEmbedUrl("https://evil.com/embed")).toBe(false);
    expect(isSafeEmbedUrl("https://typeform.com.evil.com/form")).toBe(false);
    expect(isSafeEmbedUrl("https://faketally.so/r/abc")).toBe(false);
  });

  it("rejects http:// embed URLs", () => {
    expect(isSafeEmbedUrl("http://form.typeform.com/to/abc123")).toBe(false);
    expect(isSafeEmbedUrl("http://tally.so/r/abc123")).toBe(false);
  });

  it("returns false for invalid URLs", () => {
    expect(isSafeEmbedUrl("not-a-url")).toBe(false);
    expect(isSafeEmbedUrl("")).toBe(false);
  });
});
