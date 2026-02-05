import React from 'react';
import { FileText, Download, ArrowRight } from 'lucide-react';

interface TemplateCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

interface TemplateCategoriesProps {
  categories: TemplateCategory[];
  onSelectCategory: (category: TemplateCategory) => void;
}

export const TemplateCategories = ({ categories, onSelectCategory }: TemplateCategoriesProps) => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Document Templates</h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Browse our collection of legal document templates. Customize them with your information and download in PDF format.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-100 overflow-hidden cursor-pointer hover:border-amber-300"
          >
            <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center text-white relative`}>
              <div className="text-5xl opacity-20">{category.icon}</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{category.name}</h3>
              <p className="text-slate-600 text-sm mb-4">{category.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-medium text-slate-600">{category.count} templates</span>
                </div>
                <ArrowRight className="h-5 w-5 text-amber-500 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
