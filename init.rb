require 'redmine'

Redmine::Plugin.register :redmine_select2 do
  name 'Select To Select2 Plugin'
  author 'laoshancun'
  description 'Replace Select Tag to Select2 fork from(https://github.com/sf-cola/select_to_select2)'
  version '0.1.1'
  url 'https://github.com/laoshancun/redmine_select2'
  author_url 'https://github.com/laoshancun'
end

class RedmineSelect2ViewListener < Redmine::Hook::ViewListener

  # Adds javascript and stylesheet tags
  def view_layouts_base_html_head(context)
      javascript_include_tag('select2-4.0.13/js/select2.min.js', :plugin => :redmine_select2) +
      javascript_include_tag('selecttoselect2main.js', :plugin => :redmine_select2) +
      stylesheet_link_tag('select2-4.0.13/css/select2.min.css', :plugin => :redmine_select2)
  end
  
end

