import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Download, PackageSearch } from "lucide-react";
import { products, getProductBySlug } from "@/data/products";
import { Metadata } from "next";

// SEO Metadata Generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  
  if (!product) {
    return {
      title: "Product Not Found | Auranook",
    };
  }

  return {
    title: `${product.title} | Auranook`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} | Auranook Enterprise`,
      description: product.shortDescription,
      images: [product.images[0]],
    },
  };
}

// Static Route Generation
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": product.images,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "category": product.systemCategory,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-24 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-foreground/60 mb-8 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
            {/* Product Image Gallery */}
            <div className="space-y-6">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.images.slice(1).map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-white/10 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                      <Image src={img} alt={`${product.title} thumbnail ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold tracking-widest uppercase text-xs w-max border border-primary/20">
                  {product.brand}
                </span>
                <span className="inline-block px-4 py-1.5 border border-border text-foreground/70 font-bold tracking-widest uppercase text-xs w-max">
                  {product.systemCategory}
                </span>
                {product.status && (
                  <span className={`inline-block px-4 py-1.5 border font-bold tracking-widest uppercase text-xs w-max ${product.status === 'Coming Soon' ? 'border-amber-500/30 bg-amber-500/10 text-amber-500' : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-500'}`}>
                    {product.status}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground">
                {product.title}
              </h1>
              <p className="text-xl text-foreground/70 mb-6 leading-relaxed font-medium">
                {product.description}
              </p>

              {product.definition && (
                <div className="bg-secondary/50 border border-border rounded-xl p-6 mb-10">
                  <h4 className="text-sm font-bold tracking-widest uppercase text-foreground/50 mb-2">Architectural Definition</h4>
                  <p className="text-foreground/80 leading-relaxed italic">
                    &quot;{product.definition}&quot;
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold tracking-wide hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(184,159,93,0.4)]">
                  <PackageSearch className="w-5 h-5" />
                  Request Quote
                </Link>
                <button className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-bold tracking-wide hover:bg-secondary/80 transition-all flex items-center gap-2 border border-border">
                  <Download className="w-5 h-5" />
                  Technical Brochure
                </button>
              </div>

              {/* Specifications */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-card-foreground">Technical Specifications</h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-1 pb-4 border-b border-border/50">
                      <dt className="text-sm text-card-foreground/60 font-medium">{key}</dt>
                      <dd className="font-bold text-card-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-extrabold mb-8">Key Benefits & Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors shadow-sm group">
                    <CheckCircle2 className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-lg mb-2 text-card-foreground">{feature.title}</h4>
                    <p className="text-card-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications & Limitations */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold mb-8">Ideal Applications</h2>
                <div className="flex flex-wrap gap-3">
                  {product.applications.map((app, idx) => (
                    <span key={idx} className="px-5 py-3 rounded-full bg-secondary border border-border text-secondary-foreground font-semibold text-sm">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {product.limitations && product.limitations.length > 0 && (
                <div>
                  <h2 className="text-3xl font-extrabold mb-6">Specification Constraints</h2>
                  <ul className="space-y-3">
                    {product.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/70 bg-card border border-border rounded-lg p-4">
                        <span className="text-destructive font-bold mt-0.5">!</span>
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* FAQs Section */}
          {product.faqs && product.faqs.length > 0 && (
            <div className="mt-20 pt-16 border-t border-border">
              <h2 className="text-3xl font-extrabold mb-10 text-center">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                    <h4 className="font-bold text-lg mb-3 text-card-foreground">{faq.question}</h4>
                    <p className="text-card-foreground/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
