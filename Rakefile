require 'rake'
require 'pathname'

namespace :default_value do
  desc "minify and release JS code"
  task :release do
    Rake::Task["default_value:clean"].invoke
    Dir.chdir('src')
    filename = Dir.glob("*.js").sort{|a,b| a.gsub(/\d.\d.\d/).first.delete('.').to_i <=> b.gsub(/\d.\d.\d/).first.delete('.').to_i }.last.gsub('.js','')
    version = filename.gsub(/\d.\d.\d/).first
    
    system("java -jar ../tools/yuicompressor-2.4.2.jar #{ filename }.js -o ../#{ filename.gsub('-' + version,'') }.min.js --charset utf-8")
    system("cp #{ filename }.js ../#{ filename.gsub('-' + version,'') }.js")
  end
  
  desc "delete all minified JS code"
  task :clean do
    system("rm jquery.default_value.min.js")
    system("rm jquery.default_value.js")
  end
end