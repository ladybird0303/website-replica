import React, { useState } from 'react';
import { ArrowLeft, Download, Eye, Edit2, X } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  content: string;
  fields: Array<{ name: string; label: string; type: 'text' | 'textarea'; placeholder: string }>;
}

interface TemplateDetailProps {
  category: any;
  templates: Template[];
  onBack: () => void;
}

export const TemplateDetail = ({ category, templates, onBack }: TemplateDetailProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(templates[0] || null);
  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const generatePreview = () => {
    if (!selectedTemplate) return selectedTemplate?.content;
    let preview = selectedTemplate.content;
    selectedTemplate.fields.forEach(field => {
      const value = formData[field.name] || `[${field.label}]`;
      preview = preview.replace(`[${field.label}]`, value);
    });
    return preview;
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatePreview()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedTemplate?.name}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center text-slate-600 hover:text-slate-900 mb-4 font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Categories
        </button>
        <h1 className="text-3xl font-bold text-slate-900">{category.name}</h1>
        <p className="text-slate-600 mt-2">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Template List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Available Templates</h2>
            <div className="space-y-2">
              {templates.map(template => (
                <button
                  key={template.id}
                  onClick={() => {
                    setSelectedTemplate(template);
                    setFormData({});
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedTemplate?.id === template.id
                      ? 'bg-amber-100 border border-amber-300 text-slate-900 font-medium'
                      : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <p className="font-medium text-sm">{template.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{template.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {selectedTemplate && (
            <>
              {/* Toolbar */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex gap-3 flex-wrap">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isEditing
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Edit2 className="h-4 w-4" />
                  {isEditing ? 'Editing' : 'Edit'}
                </button>

                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    showPreview
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Eye className="h-4 w-4" />
                  Preview
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all ml-auto"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>

              {/* Content Area */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Form/Edit Section */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Fill in Information</h3>
                  <div className="space-y-4">
                    {selectedTemplate.fields.map(field => (
                      <div key={field.name}>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            value={formData[field.name] || ''}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            placeholder={field.placeholder}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                            rows={3}
                          />
                        ) : (
                          <input
                            type={field.type}
                            value={formData[field.name] || ''}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            placeholder={field.placeholder}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview Section */}
                {showPreview && (
                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-96 overflow-y-auto">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Live Preview</h3>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-slate-700 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                        {generatePreview()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
